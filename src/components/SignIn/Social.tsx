import { FaGithub, FaGoogle } from 'react-icons/fa';

export function SignInSocial() {
  return (
    <div className='mt-6'>
      <p className='text-sm text-gray-700'>Sign in with</p>
      <div className='my-2 grid grid-cols-2 gap-4'>
        <div>
          <a
            href='#'
            className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
          >
            <span className='sr-only'>Sign in with Google</span>
            <FaGoogle className='text-xl text-gray-500' />
          </a>
        </div>

        <div>
          <a
            href='#'
            className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
          >
            <span className='sr-only'>Sign in with GitHub</span>
            <FaGithub className='text-xl text-gray-500' />
          </a>
        </div>
      </div>
      <div className='relative mt-6'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='bg-white px-2 text-gray-500'>Or continue with</span>
        </div>
      </div>
    </div>
  );
}
