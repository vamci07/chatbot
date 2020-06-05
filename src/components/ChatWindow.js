import React, { useLayoutEffect } from 'react';
import { Box, makeStyles, Paper, Typography, Avatar, InputBase, IconButton } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { grey } from '@material-ui/core/colors';
import './style.css';
import StyledBadge from './StyledBadge';
import bot from 'static/images/bot.jpg';
import send from 'static/images/send.png';
import messagesJson from 'utils/messages.json';
import ChatBubble from './ChatBubble';

const chatStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 132,
    right: 60,
    height: 600,
    width: 360,
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    width: '100%',
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.spacing(1, 1, 0, 0),
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // '0 9.5px 12.7px 0 rgba(0,0,0,.05)',
  },
  anchorOriginBottomRightRectangle: {
    right: 12,
    bottom: 6,
  },
  avatar: {
    color: theme.palette.getContrastText(theme.palette.common.white),
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(1),
  },
  titleWrapper: {
    marginLeft: theme.spacing(2),
  },
  title: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold,
  },
  subTitle: {
    fontSize: theme.typography.pxToRem(10),
    fontWeight: theme.typography.fontWeightRegular,
    color: grey[400],
  },
  content: {
    backgroundColor: theme.palette.background.default,
    height: 448,
    padding: theme.spacing(2, 1, 0),
    overflowY: 'scroll',
  },
  actions: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: theme.spacing(0, 0, 1, 1),
    boxShadow: 'none',
    height: 64,
  },
  input: {
    paddingLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    marginRight: theme.spacing(1),
    padding: 10,
  },
  bubblesContainer: {
    width: '100%',
    '& > *': {
      padding: theme.spacing(1, 2),
    },
  },
}));

function ChatWindow({ open }) {
  const { messages = [] } = messagesJson;

  useLayoutEffect(() => {
    const element = document.getElementById('end-of-messages');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  });

  const classes = chatStyles();
  return (
    <CSSTransition in={open} timeout={300} classNames="chat" unmountOnExit>
      <Paper className={classes.root}>
        <Box className={classes.header}>
          <StyledBadge
            overlap="circle"
            variant="dot"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Avatar className={classes.avatar} src={bot}></Avatar>
          </StyledBadge>
          <Box className={classes.titleWrapper}>
            <Typography className={classes.title}>Bot</Typography>
            <Typography className={classes.subTitle}>Online</Typography>
          </Box>
        </Box>
        <Box className={classes.content}>
          {messages &&
            messages.length &&
            messages.map((messageItem, index) => {
              const { id, author, timestamp, message } = messageItem;
              return (
                <Box className={classes.bubblesContainer}>
                  <ChatBubble id={id} author={author} timestamp={timestamp} message={message} />
                </Box>
              );
            })}
          <Box id="end-of-messages" />
        </Box>
        <Paper component="form" className={classes.actions}>
          <InputBase
            className={classes.input}
            placeholder="Type...."
            inputProps={{ 'aria-label': 'type query to bella' }}
          />
          <IconButton color="primary" className={classes.iconButton} aria-label="query">
            <img src={send} style={{ height: 24, width: 24 }} alt="send" />
          </IconButton>
        </Paper>
      </Paper>
    </CSSTransition>
  );
}

export default ChatWindow;
