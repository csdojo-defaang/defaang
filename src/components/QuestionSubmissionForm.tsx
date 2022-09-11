import { type SubmitHandler, useForm } from 'react-hook-form';

interface QuestionSubmissionFormInputs {
	company: string;
	position: string;
	location: string;
	asked_month: number;
	asked_year: number;
	question: string;
	question_details: string;
	stay_anonymous: boolean;
}

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
] as const;

export function QuestionSubmissionForm() {
	// reference: https://react-hook-form.com/get-started#Quickstart
	const { register, handleSubmit, reset, formState } = useForm<QuestionSubmissionFormInputs>();

	const onSubmit: SubmitHandler<QuestionSubmissionFormInputs> = data => {
		console.log(data);
		reset();
	};

	return (
		<div className='w-full rounded-md bg-white p-4 shadow-md sm:w-4/5 md:w-2/3 lg:w-1/2'>
			<form className='space-y-8 divide-y divide-gray-200' onSubmit={handleSubmit(onSubmit)}>
				<div className='space-y-8 divide-y divide-gray-200'>
					<div>
						<div>
							<h2 className='text-xl font-medium leading-6 text-gray-900'>Submit a question</h2>
						</div>

						<div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
							<div className='sm:col-span-6'>
								<label htmlFor='company' className='block text-sm font-medium text-gray-700'>
									Company
								</label>
								<div className='mt-1 flex flex-col gap-y-1'>
									<input
										type='text'
										id='company'
										className='block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
										{...register('company', { required: true })}
									/>
									{formState.errors.company && <span className='text-xs text-red-500'>Company is required</span>}
								</div>
							</div>

							<div className='sm:col-span-6'>
								<label htmlFor='position' className='block text-sm font-medium text-gray-700'>
									Position
								</label>
								<div className='mt-1 flex flex-col gap-y-1'>
									<input
										type='text'
										{...register('position', { required: true })}
										id='position'
										className='block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
									/>
									{formState.errors.position && <span className='text-xs text-red-500'>Position is required</span>}
								</div>
							</div>

							<div className='sm:col-span-6'>
								<label htmlFor='location' className='block text-sm font-medium text-gray-700'>
									Location
								</label>
								<div className='mt-1 flex flex-col gap-y-1'>
									<input
										type='text'
										{...register('location', { required: true })}
										id='location'
										className='block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
									/>
									{formState.errors.location && <span className='text-xs text-red-500'>Location is required</span>}
								</div>
							</div>

							<fieldset className='sm:col-span-6'>
								<legend>When was this asked?</legend>
								<div className='mt-2 flex flex-row gap-x-1'>
									<div className='w-2/3 flex-auto'>
										<label htmlFor='asked-month' className='block text-xs font-medium text-gray-500'>
											Month
										</label>
										<div className='mt-1 flex flex-col gap-y-1'>
											<select
												{...register('asked_month', { required: true, valueAsNumber: true })}
												id='asked-month'
												defaultValue={new Date().getMonth()}
												className='block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											>
												{months.map((month, index) => (
													<option key={month} value={index}>
														{month}
													</option>
												))}
											</select>
											{formState.errors.asked_month && <span className='text-xs text-red-500'>Month is required</span>}
										</div>
									</div>
									<div className='w-1/3 flex-auto'>
										<label htmlFor='asked-year' className='block text-xs font-medium text-gray-500'>
											Year
										</label>
										<div className='mt-1 flex flex-col gap-y-1'>
											<input
												type='tel'
												defaultValue={new Date().getFullYear()}
												{...register('asked_year', {
													required: true,
													validate: value => {
														const valueAsString = value.toString();
														if (!valueAsString) return false;
														const matches = valueAsString.match(/^\d{4}$/);
														if (!matches) return false;
														return matches.length > 0;
													},
													valueAsNumber: true,
												})}
												id='asked-year'
												className='block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											/>
											{formState.errors.asked_year && formState.errors.asked_year.type === 'required' && (
												<span className='text-xs text-red-500'>Year is required</span>
											)}
											{formState.errors.asked_year && formState.errors.asked_year.type === 'validate' && (
												<span className='text-xs text-red-500'>Not a valid year</span>
											)}
										</div>
									</div>
								</div>
							</fieldset>

							<div className='sm:col-span-6'>
								<label htmlFor='question' className='block text-sm font-medium text-gray-700'>
									Question
								</label>
								<div className='mt-1 flex flex-col gap-y-1'>
									<input
										type='text'
										{...register('question', { required: true })}
										id='question'
										className='block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
									/>
									{formState.errors.question && <span className='text-xs text-red-500'>Question is required</span>}
								</div>
							</div>

							<div className='sm:col-span-6'>
								<label htmlFor='question-details' className='block text-sm font-medium text-gray-700'>
									Question details
								</label>
								<div className='mt-1'>
									<textarea
										id='question-details'
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
									id='stay-anonymous'
									{...register('stay_anonymous')}
									type='checkbox'
									className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
								/>
							</div>
							<div className='ml-3 text-sm'>
								<label htmlFor='stay-anonymous' className='font-medium text-gray-700'>
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
