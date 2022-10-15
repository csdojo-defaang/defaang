import React from 'react';
import { Container } from './Container';

const QUESTION_COUNT_LIMIT = 10;

export function ProgressBarSection() {
  const approvedQuestionCount = 3;

  const progressBarPercentage = Math.floor((approvedQuestionCount / QUESTION_COUNT_LIMIT) * 100);

  return (
    <Container className='pt-20 pb-32 text-center lg:pt-32'>
      <h3 className='mx-auto font-display text-2xl font-medium text-slate-900 sm:text-3xl'>Next milestone</h3>
      <div className='mt-6 flex flex-wrap items-baseline justify-center'>
        <span className='hidden w-48 sm:block'></span>
        <div className='bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-7xl font-bold text-transparent'>
          {approvedQuestionCount}
        </div>
        <div className='ml-2 text-slate-700'>
          / {QUESTION_COUNT_LIMIT}
          <span className='ml-2 hidden sm:inline'>approved questions</span>
        </div>
      </div>
      <div className='mt-2 font-semibold text-slate-700 sm:hidden'>approved questions</div>
      <div className='relative mx-auto my-10 h-6 w-3/5 overflow-x-hidden rounded-full bg-gray-300'>
        <span
          className='absolute top-0 left-0 h-full min-w-[32px] max-w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-2 text-right text-sm text-white transition-all duration-500'
          style={{ width: `${progressBarPercentage}%` }}
        >
          {progressBarPercentage}%
        </span>
      </div>
      <p className='mx-auto mt-6 max-w-4xl text-lg tracking-tight text-slate-700'>
        Unlock: you&apos;ll get access to all approved questions once your question has been approved.
      </p>
    </Container>
  );
}
