// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	temp_message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	// data format:
	// {
	// 	company: "a",
	// 	location: "a",
	// 	position: "b",
	// 	question: "a",
	// 	question-details: "",
	// 	recency-weeks: "2",
	// 	stay-anonymous: false
	// }
	const data = JSON.parse(req.body);
	const jwt = req.headers.authentication;

	debugger; // TODO: remove this and insert data in Supabase.

	res.status(200).json({ temp_message: 'hello' });
}
