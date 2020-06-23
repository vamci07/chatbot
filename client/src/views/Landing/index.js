import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import ChatFab from 'components/ChatFab';
import ChatWindow from 'components/ChatWindow';

const landingStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    padding: theme.spacing(0),
    margin: theme.spacing(0),
  },
  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

function Landing() {
  const [chatOpen, setChatOpen] = React.useState(true);

  function handleChatOpen() {
    setChatOpen(!chatOpen);
  }

  const classes = landingStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography variant="h4">Hello</Typography>
        <ChatWindow open={chatOpen} healthy={false} />
        <ChatFab open={chatOpen} healthy={false} handleChatOpen={handleChatOpen} />
      </Box>
    </Box>
  );
}

export default Landing;
