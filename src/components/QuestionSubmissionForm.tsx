import { type SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import type { PageProps } from '../lib/types';

export function QuestionSubmissionForm({ session }: PageProps) {
	// reference: https://react-hook-form.com/get-started#Quickstart
	const {
		register,
		handleSubmit,
		reset,
		// formState: { errors },
	} = useForm();

	const onSubmit: SubmitHandler<FieldValues> = async data => {
		console.log(data);

		if (session === undefined || session === null) {
			console.log('user not logged in.');

			return;
		}

		let result;
		try {
			result = await fetch('/api/submit_question', {
				headers: {
					Authentication: session.access_token,
				},
				method: 'POST',
				body: JSON.stringify(data),
			});
		} catch (err) {
			console.log(err);
		}

		console.log(result);

		reset();
	};

	return (
		<div className='w-full bg-white p-4 shadow-lg sm:w-4/5 md:w-2/3 lg:w-1/2'>
			<form className='space-y-8 divide-y divide-gray-200' onSubmit={handleSubmit(onSubmit)}>
				<div className='space-y-8 divide-y divide-gray-200'>
					<div>
						<div>
							<h2 className='text-xl font-medium leading-6 text-gray-900'>Submit a question</h2>
						</div>

						<div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
							<div className='sm:col-span-4'>
								<label htmlFor='company' className='block text-sm font-medium text-gray-700'>
									Company
								</label>
								<div className='mt-1 flex rounded-md shadow-sm'>
									<input
										type='text'
										id='company'
										className='block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
										{...register('company', { required: true })}
									/>
								</div>
							</div>

							<div className='sm:col-span-4'>
								<label htmlFor='position' className='block text-sm font-medium text-gray-700'>
									Position
								</label>
								<div className='mt-1 flex rounded-md shadow-sm'>
									<input
										type='text'
										{...register('position', { required: true })}
										id='position'
										className='block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
									/>
								</div>
							</div>

							<div className='sm:col-span-4'>
								<label htmlFor='location' className='block text-sm font-medium text-gray-700'>
									Location
								</label>
								<div className='mt-1 flex rounded-md shadow-sm'>
									<input
										type='text'
										{...register('location', { required: true })}
										id='location'
										className='block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
									/>
								</div>
							</div>

							<div className='sm:col-span-3'>
								<label htmlFor='recency' className='block text-sm font-medium text-gray-700'>
									How recently was this asked?
								</label>
								<div className='mt-1'>
									<select
										id='recency'
										{...register('recency', { required: true })}
										className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
									>
										<option>Within the past week</option>
										<option>Within the past month</option>
										<option>1-2 months ago</option>
										<option>3-6 months ago</option>
										<option>7-12 months ago</option>
										<option>1+ year ago</option>
									</select>
								</div>
							</div>

							<div className='sm:col-span-6'>
								<label htmlFor='question' className='block text-sm font-medium text-gray-700'>
									Question
								</label>
								<div className='mt-1 flex rounded-md shadow-sm'>
									<input
										type='text'
										{...register('question', { required: true })}
										id='question'
										className='block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
									/>
								</div>
							</div>

							<div className='sm:col-span-6'>
								<label htmlFor='question_details' className='block text-sm font-medium text-gray-700'>
									Question details
								</label>
								<div className='mt-1'>
									<textarea
										id='question_details'
										{...register('question_details')}
										rows={3}
										className='block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
										defaultValue={''}
									/>
								</div>
							</div>
						</div>
						<div className='relative mt-6 flex'>
							<div className='flex h-5 items-center'>
								<input
									id='stay_anonymous'
									{...register('stay_anonymous')}
									type='checkbox'
									className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
								/>
							</div>
							<div className='ml-3 text-sm'>
								<label htmlFor='stay_anonymous' className='font-medium text-gray-700'>
									Stay anonymous
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className='pt-5'>
					<div className='flex justify-end'>
						<button
							type='submit'
							className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
