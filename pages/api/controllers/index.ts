import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../../../utils/supabase'

type Data = {
    id: any,
    name: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ){
    //const result = await supabase
      //.from('emission')
      //.select();
    
    // const result = await supabase.from('last_emissions').select('sum, created_at, device:device_id(name, office(name)))');
    const result = await supabase
      .from('device_type')
      .select(`
      id,
      name,
      device(
        id,
        name,
        last_emissions(sum, created_at, device_id, sensors:sensor_id(name))
      )
    `);
    
    res.status(200).json(result.data);
}