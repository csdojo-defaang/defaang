import Image from 'next/future/image';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-call-to-action.jpg';

export function CallToAction() {
  return (
    <section id='join-conversation' className='relative overflow-hidden bg-blue-600 py-32'>
      <Image
        className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
        src={backgroundImage}
        alt=''
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className='relative'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl'>Join our conversation</h2>
          <p className='mt-4 text-lg tracking-tight text-white'>
            Before we officially launch the site, feel free to join us on Discord or Twitch.
          </p>
          <div className='mt-10 flex justify-center gap-x-6'>
            <Button href='https://discord.com/invite/nNtVfKddDD' target='_blank' color='white'>
              <span className='text-blue-600'>Join us on Discord</span>
            </Button>
            <Button href='https://www.twitch.tv/ykdojo' target='_blank' color='white'>
              <span className='text-purple-600'>Join us on Twitch</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
