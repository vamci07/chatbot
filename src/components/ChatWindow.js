import React from 'react';
import { Box, makeStyles, Paper, Typography, Avatar, InputBase, IconButton } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { grey } from '@material-ui/core/colors';
import './style.css';
import StyledBadge from './StyledBadge';

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
    background: 'linear-gradient(90deg, rgba(13,71,161,1) 0%, rgba(25,118,210,1) 75%, rgba(33,150,243,1) 100%)',
    color: theme.palette.common.white,
    width: '100%',
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.spacing(1, 1, 0, 0),
    boxShadow: '0 9.5px 12.7px 0 rgba(0,0,0,.05)',
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
    borderBottom: `1px solid ${theme.palette.divider}`,
    height: 464,
    overflow: 'scroll',
  },
  actions: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: theme.spacing(0, 0, 1, 1),
    boxShadow: 'none',
    borderTop: `1px solid ${theme.palette.divider}`,
    height: 64,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    marginRight: theme.spacing(1),
    padding: 10,
  },
}));

function ChatWindow({ open }) {
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
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon={faRobot} />
            </Avatar>
          </StyledBadge>
          <Box className={classes.titleWrapper}>
            <Typography className={classes.title}>Bella</Typography>
            <Typography className={classes.subTitle}>Online</Typography>
          </Box>
        </Box>
        <Box className={classes.content}></Box>
        <Paper component="form" className={classes.actions}>
          <InputBase
            className={classes.input}
            placeholder="Type...."
            inputProps={{ 'aria-label': 'type query to bella' }}
          />
          <IconButton color="primary" className={classes.iconButton} aria-label="query">
            <FontAwesomeIcon icon={faPaperPlane} />
          </IconButton>
        </Paper>
      </Paper>
    </CSSTransition>
  );
}

export default ChatWindow;
