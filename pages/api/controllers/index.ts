import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../utils/supabase'

type CustomList = [
  {
    office: {
      id: number,
      name: string,
      device: [
        {
          name: string,
          emission: [
            {
              value: number,
              sensor: [
                {
                  name: string,
                  unit: string
                }
              ]
            }
          ]
        }
      ]
    }
  }
]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ){
    let {data} = await supabase.rpc('hello_world')
    
    res.status(200).json(data);
}