import React from 'react';
import { Box, Typography, makeStyles, Avatar } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import bot from 'static/images/M.png';
import user from 'static/images/user.jpg';

const bubbleStyles = makeStyles((theme) => ({
  root: (props) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: props.id === 0 ? 'flex-start' : 'flex-end',
  }),
  bubbleContainer: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      marginBottom: theme.spacing(0.5),
    },
    '& > p': {
      marginRight: props.id === 0 && theme.spacing(2),
      marginLeft: props.id === 1 && theme.spacing(2),
    },
  }),
  bubble: (props) => ({
    maxWidth: 240,
    borderRadius: theme.spacing(2),
    backgroundColor: props.id === 0 ? grey[300] : '#16153d',
    color: props.id === 0 ? theme.palette.common.black : theme.palette.common.white,
    padding: theme.spacing(0.5, 2),
  }),
  avatarContainer: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > div': {
      marginBottom: theme.spacing(0.5),
    },
    marginRight: props.id === 0 && theme.spacing(1),
    marginLeft: props.id === 1 && theme.spacing(1),
  }),
  author: {
    fontSize: theme.typography.pxToRem(8),
  },
  message: {
    fontSize: theme.typography.pxToRem(14),
  },
}));

export default function ChatBubble({ id, author, timestamp, message }) {
  const classes = bubbleStyles({ id });
  return (
    <Box className={classes.root}>
      {id === 0 && (
        <Box className={classes.avatarContainer}>
          <Avatar src={bot} />
        </Box>
      )}
      <Box className={classes.bubbleContainer}>
        <Box className={classes.bubble}>
          <Typography className={classes.message}> {message} </Typography>
        </Box>
      </Box>
      {id === 1 && (
        <Box className={classes.avatarContainer}>
          <Avatar src={user} />
        </Box>
      )}
    </Box>
  );
}

// <Typography className={classes.author}> {author} </Typography>
// <Typography className={classes.author}> {timestamp} </Typography>
