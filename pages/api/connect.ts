import supabase from './utils/supabase'
import { Server } from 'socket.io';


const SocketHandler = (req:any, res:any) => {
  const fetchData = async () => {
    const res = await supabase
      .from('device_type')
      .select(`
        id,
        name,
        device(
          id,
          name,
          emissions: last_emissions(value:sum, created_at, device_id, sensor:sensor_id(id, name, unit))
        )
      `);
    return res.data;
  }

  if (!res.socket.server.io) {
    const io = new Server(res.socket.server)
    io.on('connection', async (socket) => {
      const data = await fetchData();

      socket.emit('init', data);

      supabase
        .channel('data')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'emission',
          },
          async () => {
            const data = await fetchData();
            socket.emit('update', data);
          }
        )
        .subscribe();
    })
    res.socket.server.io = io
  }
  res.end()
}

export default SocketHandler;