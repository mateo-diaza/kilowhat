import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../../utils/supabase'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ){
    if (req.method === 'PUT') {
        const { id } = req.query;
        if (typeof id !== 'string') { return res.status(400).json({ error: 'An error has occurred'})};

        const body = JSON.parse(req.body);
        const { pos_x, pos_y } = body;

        console.log({ pos_x, pos_y});
        const { error } = await supabase
            .from('device')
            .update({ pos_x: parseInt(pos_x), pos_y: parseInt(pos_y)})
            .eq('id', id);

        if (error) { return res.status(400).json({ error })};
        return res.status(204).json({});

    }
    res.status(200).json({});
}