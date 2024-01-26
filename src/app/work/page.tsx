'use client';

import React, { useState, createRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransitionGroupAnimation from '@/app/components/TransitionGroup';

export default function WorkPage() {
  return (
    <>
      <div className='card c text-5xl my-4'>Work Page</div>
      <div className='my-4 w-40 h-auto aspect-[1/1] bg-blue-300'></div>
      <TransitionGroupAnimation></TransitionGroupAnimation>
    </>
  );
}
