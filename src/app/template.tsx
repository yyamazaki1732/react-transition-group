'use client';

import { motion } from 'framer-motion';
import { ReactNode, FC } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

const Template: FC<ILayoutProps> = ({ children }) => {
  //   const variants = {
  //     hidden: { opacity: 1, x: 0, y: 0 },
  //     enter: { opacity: 0, x: 0, y: 0 },
  //   };
  return (
    <div>
      <motion.main
        // variants={variants}
        initial={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 1, x: 0, y: 0 }}
        animate={{ opacity: 0, x: 0, y: 0 }}
        transition={{ type: 'linear', duration: 0.25 }}
        key='LandingPage'
      >
        <div className='w-80 h-80 bg-green-300 fixed bottom-0 left-0'></div>
      </motion.main>
      {children}
    </div>
  );
};
// ===============================================
// # https://stackoverflow.com/questions/77691781/exit-animation-on-nextjs-14-framer-motion
// ===============================================

export default Template;
