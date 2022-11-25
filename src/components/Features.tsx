import { useId } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { Container } from '@/components/Container';

const features = [
  {
    name: 'Contribute',
    summary: 'Contribute interview questions anonymously.',
    description:
      "Submit recently asked interview questions, and you'll get access to other questions. We'll officially launch the site once we have 100 approved questions.",
    icon: function ReportingIcon() {
      const id = useId();
      return (
        <>
          <defs>
            <linearGradient id={id} x1='11.5' y1={18} x2={36} y2='15.5' gradientUnits='userSpaceOnUse'>
              <stop offset='.194' stopColor='#fff' />
              <stop offset={1} stopColor='#6692F1' />
            </linearGradient>
          </defs>
          <path
            d='m30 15-4 5-4-11-4 18-4-11-4 7-4-5'
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </>
      );
    },
  },
  {
    name: 'View questions',
    summary: 'Check questions submitted by other users.',
    description:
      "You'll be able to view the other questions once your question has been approved. After the launch, the questions will be visible to everyone.",
    icon: function InventoryIcon() {
      return (
        <>
          <path opacity='.5' d='M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z' fill='#fff' />
          <path opacity='.3' d='M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z' fill='#fff' />
          <path d='M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z' fill='#fff' />
        </>
      );
    },
  },
  {
    name: 'Discuss answers',
    summary: 'Discuss potential answers with other users.',
    description: "Once you're inside, discuss potential answers to the questions with other users.",
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity='.5'
            d='M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z'
            fill='#fff'
          />
          <path
            d='M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z'
            fill='#fff'
          />
        </>
      );
    },
  },
];

interface props {
  feature: {
    name: React.ReactNode;
    summary: string;
    description: string;
    icon: () => JSX.Element;
  };
  isActive: boolean;
  className: string;
  [key: string]: any;
}

function Feature({ feature, isActive, className, ...props }: props) {
  return (
    <div className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')} {...props}>
      <div className={clsx('w-9 rounded-lg', isActive ? 'bg-blue-600' : 'bg-slate-500')}>
        <svg aria-hidden='true' className='h-9 w-9' fill='none'>
          <feature.icon />
        </svg>
      </div>
      <h3 className={clsx('mt-6 text-sm font-medium', isActive ? 'text-blue-600' : 'text-slate-600')}>
        {feature.name}
      </h3>
      <p className='mt-2 font-display text-xl text-slate-900'>{feature.summary}</p>
      <p className='mt-4 text-sm text-slate-600'>{feature.description}</p>
    </div>
  );
}

function FeaturesMobile() {
  return (
    <div className='-mx-4 mt-10 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden'>
      {features.map(feature => (
        <div key={feature.name}>
          <Feature feature={feature} className='mx-auto max-w-2xl' isActive />
          <div className='relative mt-10 pb-10'>
            <div className='absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6' />
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop() {
  return (
    <Tab.Group as='div' className='hidden lg:mt-20 lg:block'>
      {({ selectedIndex }) => (
        <>
          <Tab.List className='grid grid-cols-3 gap-x-8'>
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className='[&:not(:focus-visible)]:focus:outline-none'>
                      <span className='absolute inset-0' />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className='relative'
              />
            ))}
          </Tab.List>
        </>
      )}
    </Tab.Group>
  );
}

export function Features() {
  return (
    <section
      id='how-it-works'
      aria-label='Features for simplifying everyday business tasks'
      className='bg-white pt-10 sm:pb-20 sm:pt-32 lg:pb-32'
    >
      <Container>
        <div className='mx-auto max-w-2xl md:text-center'>
          <h2 className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'>How it works</h2>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
