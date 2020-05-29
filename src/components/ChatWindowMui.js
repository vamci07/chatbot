import React from 'react';
import { Box, makeStyles, Paper } from '@material-ui/core';
import clsx from 'clsx';

const scaleInBr = 'scale-in-br';
const scaleOutBr = 'scale-out-br';

const chatStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 132,
    right: 60,
    height: 600,
    width: 360,
    borderRadius: theme.spacing(1),
    // border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    animation: `$${scaleInBr} 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  chatClose: {
    animation: `$${scaleOutBr} 0.25s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`,
  },
  [`@keyframes ${scaleInBr}`]: {
    '0%': {
      WebkitTransform: 'scale(0)',
      transform: 'scale(0)',
      WebkitTransformOrigin: '100% 100%',
      transformOrigin: '100% 100%',
      opacity: 1,
    },
    '100%': {
      WebkitTransform: 'scale(1)',
      transform: 'scale(1)',
      WebkitTransformOrigin: '100% 100%',
      transformOrigin: '100% 100%',
      opacity: 1,
    },
  },
  [`@keyframes ${scaleOutBr}`]: {
    '0%': {
      WebkitTransform: 'scale(1)',
      transform: 'scale(1)',
      WebkitTransformOrigin: '100% 100%',
      transformOrigin: '100% 100%',
      opacity: 1,
    },
    '100%': {
      WebkitTransform: 'scale(0)',
      transform: 'scale(0)',
      WebkitTransformOrigin: '100% 100%',
      transformOrigin: '100% 100%',
      opacity: 1,
    },
  },
}));

function ChatWindow({ open }) {
  const classes = chatStyles();
  return open ? (
    <Paper className={clsx(classes.root)}>
      <Box>hello</Box>
    </Paper>
  ) : null;
}

export default ChatWindow;
