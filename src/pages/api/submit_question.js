// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// TODO: move the following somewhere else.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const supabaseSecret = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req, res) {
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

	const { data: user, userError } = await supabase.auth.api.getUser(jwt);
	const id = user.identities[0]['id'];

	input_data['created_by'] = id;

	const { data, error } = await supabaseSecret.from('questions').insert([input_data]);

	// TODO: send back a proper reseponse here.

	res.status(200).json({ temp_message: 'hello' });
}
