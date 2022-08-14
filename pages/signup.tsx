import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { supabase } from '../utils/supabaseClient';

const SignUp: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = async () => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert(`Success Register in ${user?.email}`);
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Sign Up</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='header'>Defaang</div>
      <p>Create Account now!</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <div className='w-50 mt-5'>
          <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='email'>
            Username
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
            id='email'
            type='email'
            placeholder='E-Mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='w-50 mt-5'>
          <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='password'>
            Password
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
            id='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          className='focus:shadow-outline mt-5 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none'
          type='submit'
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
