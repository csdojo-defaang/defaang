import React, { useState, Fragment } from 'react';
import { type SubmitHandler, useForm, FieldValues } from 'react-hook-form';

//3rd party components
import { Dialog, Transition } from '@headlessui/react';
import type { PageProps } from '../lib/types';

interface QuestionSubmissionFormInputs {
  company: string;
  position: string;
  location: string;
  recency_weeks: string;
  question: string;
  question_details: string;
  stay_anonymous: boolean;
}

export function QuestionSubmissionForm({ session }: PageProps) {
  const [state, setState] = useState({
    showPopup: false,
    btnLoading: false,
  });
  // reference: https://react-hook-form.com/get-started#Quickstart
  const { register, handleSubmit, reset, formState } = useForm<QuestionSubmissionFormInputs>();

  // Modal Popup
  const handleModalPopup = () => {
    setState(prevState => ({
      ...prevState,
      showPopup: !state.showPopup,
    }));
  };

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    if (session === undefined || session === null) {
      return;
    }
    setState(prevState => ({
      ...prevState,
      btnLoading: true,
    }));

    let result;
    try {
      result = await fetch('/api/submit_question', {
        headers: {
          Authentication: session.access_token,
        },
        method: 'POST',
        body: JSON.stringify(data),
      });
      if (result?.status === 200) {
        setState(prevState => ({
          ...prevState,
          btnLoading: false,
        }));
        handleModalPopup();
      }
    } catch (err) {
      console.log(err);
    }
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
                    list='companies'
                    id='company'
                    className='block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    {...register('company', { required: true })}
                  />
                  <datalist id='companies'>
                    <option value='Meta/Facebook' />
                    <option value='Amazon' />
                    <option value='Apple' />
                    <option value='Netflix' />
                    <option value='Google' />
                    <option value='Microsoft' />
                    <option value='Salesforce' />
                  </datalist>
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

              <div className='sm:col-span-6'>
                <label htmlFor='recency_weeks' className='block text-sm font-medium text-gray-700'>
                  How recently was this asked?
                </label>
                <div className='mt-1'>
                  <select
                    id='recency_weeks'
                    {...register('recency_weeks', { required: true })}
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  >
                    <option value='1'>Within the past week</option>
                    <option value='2'>Within the past month</option>
                    <option value='6'>1-2 months ago</option>
                    <option value='18'>3-6 months ago</option>
                    <option value='38'>7-12 months ago</option>
                    <option value='60'>1+ year ago</option>
                  </select>
                </div>
              </div>

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
              {state.btnLoading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
      <Transition appear show={state.showPopup} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={handleModalPopup}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                    Question submitted successfully!
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>Thank you! We will review the question as soon as possible.</p>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='float-right inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={handleModalPopup}
                    >
                      Add more?
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
