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
    const result = await supabase.from('office').select('id, name')
    
    res.status(200).json(result.data);
}