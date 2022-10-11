// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

// TODO: move the following somewhere else?
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.NEXT_PRIVATE_SUPABASE_SERVICE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const supabaseSecret = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // input_data format:
  // {
  // 	company: "a",
  // 	location: "a",
  // 	position: "b",
  // 	question: "a",
  // 	question-details: "",
  // 	recency_weeks: "2",
  // 	stay-anonymous: false
  // }

  // NOTE: recency_weeks: "2" means we estimate this question was asked about 2 weeks ago.

  const input_data = JSON.parse(req.body);
  const jwt = req.headers.authentication as string;
  const estimated_asked_date = new Date(
    new Date().setDate(new Date().getDate() - Number(input_data['recency_weeks']) * 7),
  );

  input_data['estimated_asked_date'] = estimated_asked_date;
  delete input_data['recency_weeks'];

  if (!jwt || jwt.length == 0) return res.status(401).json({ error: 'Unauthorized' });

  const { data: user } = await supabase.auth.api.getUser(jwt);

  if (!user || !user.identities || user.identities.length == 0) return res.status(401).json({ error: 'Unauthorized' });

  const id = user.identities[0]['id'];

  input_data['created_by'] = id;

  const { error } = await supabaseSecret.from('questions').insert([input_data]);

  if (error) {
    res.status(500).json({ error });
  } else {
    res.status(200).json({ message: 'success!' });
  }
}
