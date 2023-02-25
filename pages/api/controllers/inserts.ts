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
    let devices: any = [];

    function createRandomEmission() {
      let number = (Math.random()*30).toFixed(2);

      let time = Date.now()
      return {
        device_id: Math.floor((Math.random()*11)+1),
        sensor_id: 3,
        value: parseFloat(number)
      }
    }

    Array.from({ length: 100 }).forEach(() => {
      devices.push(createRandomEmission())
    } 
    )

    const response = await supabase
    .from('emission')
    .insert(devices)

    res.status(200).json({});
}