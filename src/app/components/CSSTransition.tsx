import React, { useState, useRef } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CSSTransitionAnimation() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [test, setTest] = useState(true);
  const nodeRef = useRef(null);
  return (
    <Container style={{ paddingTop: '2rem' }}>
      {showButton && (
        <Button onClick={() => setShowMessage(true)} size='lg'>
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames='alert'
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div ref={nodeRef}>
          <Alert
            variant='primary'
            dismissible
            onClose={() => setShowMessage(false)}
          >
            <Alert.Heading>Animated alert message</Alert.Heading>
            <p>
              This alert message is being transitioned in and out of the DOM.
            </p>
            <Button variant='primary' onClick={() => setShowMessage(false)}>
              Close
            </Button>
          </Alert>
        </div>
      </CSSTransition>
    </Container>
  );
}
