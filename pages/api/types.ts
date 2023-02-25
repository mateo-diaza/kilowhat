import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from './utils/supabase'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ){
    const result = await supabase
      .from('device_type')
      .select(`
      id,
      name,
      device(
        id,
        name,
        emissions: last_emissions(value:sum, created_at, device_id, sensor:sensor_id(name, unit))
      )
    `);
    
    res.status(200).json(result.data);
}