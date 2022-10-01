import Link from 'next/link';
import { FaGithub, FaDiscord } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className='grid justify-items-center border-t-2 p-6'>
      <div className='flex flex-row space-x-6'>
        <Link href='https://github.com/ykdojo/defaang'>
          <a target='_blank' rel='noopener noreferrer'>
            <FaGithub className='h-7 w-7' title='GitHub' />
          </a>
        </Link>
        <Link href='https://discord.gg/VjrAf3N7Yn'>
          <a target='_blank' rel='noopener noreferrer'>
            <FaDiscord className='h-7 w-7' title='Discord' />
          </a>
        </Link>
      </div>
    </footer>
  );
}
