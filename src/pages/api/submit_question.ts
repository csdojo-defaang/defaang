// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
	temp_message: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	// data format:
	// {
	// 	company: "a",
	// 	location: "a",
	// 	position: "b",
	// 	question: "a",
	// 	question-details: "",
	// 	recency: "Within the past week",
	// 	stay-anonymous: false
	// }
	const data = JSON.parse(req.body);
	// const jwt = req.headers.authentication;

	console.log('data received:');
	console.log(data);

	res.status(200).json({ temp_message: 'hello' });
}
