import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey: string = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY || '';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
export const supabaseSecret: SupabaseClient = createClient(supabaseUrl, supabaseServiceKey);

// TODO: working on this now.
// Next: try service role: https://github.com/ykdojo/defaang/issues/108

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	temp_message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	// data format:
	// {
	// 	company: "a",
	// 	location: "a",
	// 	position: "b",
	// 	question: "a",
	// 	question_details: "",
	// 	recency-weeks: "2",
	// 	stay_anonymous: false
	// }
	const input_data = JSON.parse(req.body);
	const jwt = req.headers.authentication;
	const asked_date = new Date(new Date().setDate(new Date().getDate() - Number(input_data['recency-weeks']) * 7));

	input_data['asked_date'] = asked_date;
	delete input_data['recency-weeks'];

	const response = await supabase.auth.api.getUserByCookie(req);
	debugger;

	const { data, error } = await supabaseSecret.from('questions').insert([input_data]);

	console.log('input_data');
	console.log(input_data);
	console.log('data');
	console.log(data);
	console.log('error');
	console.log(error);

	// debugger;

	res.status(200).json({ temp_message: 'hello' });
}
