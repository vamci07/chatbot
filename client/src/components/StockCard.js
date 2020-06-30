import React from 'react';
import { Box, Typography, makeStyles, Avatar } from '@material-ui/core';
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
    alignItems: props.id === 0 ? 'flex-end' : 'flex-start',
    '& > div': {
      marginBottom: theme.spacing(0.5),
    },
    '& > p': {
      marginRight: props.id === 0 && theme.spacing(2),
      marginLeft: props.id === 1 && theme.spacing(2),
    },
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
  card: {
    borderRadius: 12,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

export default function StockCard({ id, author, timestamp, message }) {
  const { change, changePercent, companyName, latestPrice, previousClose } = message;
  const classes = bubbleStyles({ id });
  return (
    <Box className={classes.root}>
      {id === 0 && (
        <Box className={classes.avatarContainer}>
          <Avatar src={bot} />
          <Typography className={classes.author}>{author}</Typography>
        </Box>
      )}
      <Box className={classes.bubbleContainer}>
        <div id="card" class="weather">
          {change}
          {changePercent}
          {companyName}
          {latestPrice}
          {previousClose}
        </div>
        <Typography className={classes.author}>{timestamp}</Typography>
      </Box>
      {id === 1 && (
        <Box className={classes.avatarContainer}>
          <Avatar src={user} />
          <Typography className={classes.author}>{author}</Typography>
        </Box>
      )}
    </Box>
  );
}
