import React from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import './style.css';

const fabStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 60,
    right: 60,
    height: 64,
    width: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 26,
    width: '26px !important',
    fontSize: theme.typography.pxToRem(26),
  },
}));

function ChatFab({ open, handleChatOpen }) {
  const classes = fabStyles();
  return (
    <Fab color="primary" className={classes.root} onClick={handleChatOpen}>
      <CSSTransition in={open} timeout={300} classNames="icon">
        <FontAwesomeIcon icon={open ? faTimes : faRobot} className={classes.icon} />
      </CSSTransition>
    </Fab>
  );
}

export default ChatFab;
