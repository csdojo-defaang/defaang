import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../utils/supabaseClient';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export function SignUpForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp(
      { email, password },
      {
        data: {
          username,
        },
      },
    );
    if (error) alert(error.message);
    else {
      router.push('/confirm-email');
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSignUp();
      }}
      className='mt-4 flex flex-col space-y-4'
    >
      <div className='flex w-full flex-col space-y-2'>
        <label htmlFor='email' className='text-sm text-gray-600'>
          Email address
        </label>
        <input
          type='email'
          id='email'
          autoComplete='email'
          required
          className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='flex w-full flex-col space-y-2'>
        <label htmlFor='username' className='text-sm text-gray-600'>
          Username
        </label>
        <input
          type='text'
          id='username'
          autoComplete='username'
          required
          className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className='flex w-full flex-col space-y-2 '>
        <label htmlFor='password' className='text-sm text-gray-600'>
          Password
        </label>
        <div className='flex'>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            autoComplete='new-password'
            required
            className='relative block w-full appearance-none rounded-l-md border border-r-0 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className='rounded-r-md border border-l-0 border-gray-300 px-2 focus:outline-none'
            type='button'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <HiEye className='h-4 w-4 fill-gray-500' title='hide password' />
            ) : (
              <HiEyeOff className='h-4 w-4 fill-gray-500' title='show password' />
            )}
          </button>
        </div>
      </div>
      <button
        type='submit'
        className='group relative my-4 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      >
        Sign up
      </button>
    </form>
  );
}
