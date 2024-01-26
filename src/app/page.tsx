'use client';

import CSSTransitionAnimation from '@/app/components/CSSTransition';

export default function Home() {
  return (
    <div>
      <div className='card c text-5xl my-4'>Home Page</div>
      <div className='my-4 w-40 h-auto aspect-[1/1] bg-blue-300'></div>
      <CSSTransitionAnimation></CSSTransitionAnimation>
      {/* <div
        ref={ref}
        id='transition-elememt'
        className='w-80 h-auto aspect-[1/1] bg-red-300'
      ></div> */}
    </div>
  );
}
