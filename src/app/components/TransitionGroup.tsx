import React, { useState, createRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function TransitionGroupAnimation() {
  const [items, setItems] = useState(() => [
    {
      id: uuid(),
      text: 'Buy eggs',
      nodeRef: createRef(null),
    },
    {
      id: uuid(),
      text: 'Pay bills',
      nodeRef: createRef(null),
    },
    {
      id: uuid(),
      text: 'Invite friends over',
      nodeRef: createRef(null),
    },
    {
      id: uuid(),
      text: 'Fix the TV',
      nodeRef: createRef(null),
    },
  ]);
  return (
    <Container style={{ marginTop: '2rem' }}>
      <ListGroup style={{ marginBottom: '1rem' }}>
        <TransitionGroup className='todo-list'>
          {' '}
          {items.map(({ id, text, nodeRef }) => (
            <CSSTransition
              key={id}
              nodeRef={nodeRef}
              timeout={500}
              classNames='item'
            >
              <ListGroup.Item ref={nodeRef}>
                <Button
                  className='remove-btn'
                  variant='danger'
                  size='sm'
                  onClick={() =>
                    setItems((items) => items.filter((item) => item.id !== id))
                  }
                >
                  &times;
                </Button>
                {text}
              </ListGroup.Item>
            </CSSTransition>
          ))}
          <Button
            onClick={() => {
              const text = prompt('Enter some text');
              if (text) {
                setItems((items) => [
                  ...items,
                  {
                    id: uuid(),
                    text,
                    nodeRef: createRef(null),
                  },
                ]);
              }
            }}
          >
            Add Item
          </Button>
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}
