'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import SwitchTransitionAnimation from '@/app/components/SwitchTransition';
import React, { useState, useEffect, useRef, use } from 'react';
import { usePathname } from 'next/navigation';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutPage() {
  const onEnter = () => {
    console.log('enter');
  };
  const onEntered = () => {
    console.log('entered');
  };
  const onExit = () => {
    console.log('exit');
  };
  const onExited = () => {
    console.log('exited');
  };

  return (
    <div>
      <div className='card c text-5xl my-4'>About Page</div>
      <div className='my-4 w-40 h-auto aspect-[1/1] bg-blue-300'></div>
      <SwitchTransitionAnimation></SwitchTransitionAnimation>
    </div>
  );
}
