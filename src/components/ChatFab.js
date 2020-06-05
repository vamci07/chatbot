import React from 'react';
import { Fab, makeStyles, Box } from '@material-ui/core';
import bot from 'static/images/bot.jpg';
import close from 'static/images/close.png';
import StyledBadge from './StyledBadge';

const fabStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 60,
    right: 60,
  },
  fab: {
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

function ChatFab({ open, healthy = 'false', handleChatOpen }) {
  const classes = fabStyles();
  return (
    <Box className={classes.root}>
      <StyledBadge
        overlap="circle"
        variant="dot"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        healthy={healthy}
      >
        <Fab className={classes.fab} onClick={handleChatOpen}>
          {!open && <img src={bot} style={{ height: 60, width: 60, borderRadius: '100%' }} alt="bot" />}
          {open && <img src={close} style={{ height: 20, width: 20, borderRadius: '100%' }} alt="close" />}
        </Fab>
      </StyledBadge>
    </Box>
  );
}

export default ChatFab;
