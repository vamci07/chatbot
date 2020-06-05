import React from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import bot from 'static/images/bot.jpg';
import close from 'static/images/close.png';

const fabStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 60,
    right: 60,
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16153d',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#16153d',
      color: theme.palette.common.white,
    },
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
    <Fab className={classes.root} onClick={handleChatOpen}>
      {!open && <img src={bot} style={{ height: 60, width: 60, borderRadius: '100%' }} alt="bot" />}
      {open && <img src={close} style={{ height: 20, width: 20, borderRadius: '100%' }} alt="close" />}
    </Fab>
  );
}

export default ChatFab;
