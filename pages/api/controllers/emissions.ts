import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../utils/supabase'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ){
    const result = await supabase.from('emission').select('created_at, value');
    
    res.status(200).json(result.data);
}