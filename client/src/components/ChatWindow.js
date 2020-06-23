import React, { useLayoutEffect } from 'react';
import { Box, makeStyles, Paper, Typography, Avatar, InputBase, IconButton } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { grey } from '@material-ui/core/colors';
import './style.css';
import StyledBadge from './StyledBadge';
import bot from 'static/images/bot.jpg';
import send from 'static/images/send.png';
import ChatBubble from './ChatBubble';
import Axios from 'axios';
import WeatherCard from './WeatherCard';

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

function ChatWindow({ open, healthy = false }) {
  const [messages, setMessages] = React.useState([
    {
      id: 0,
      author: 'Bot',
      timestamp: '06/05/2020 02:00pm',
      message: "Hey there 👋. I'm AI Bot.",
    },
    /* {
      id: 0,
      author: 'Bot',
      timestamp: '06/05/2020 02:00pm',
      recipient_id: 'Vamshi',
      message: {
        request: { type: 'City', query: 'New York, United States of America', language: 'en', unit: 'm' },
        location: {
          name: 'New York',
          country: 'United States of America',
          region: 'New York',
          lat: '40.714',
          lon: '-74.006',
          timezone_id: 'America/New_York',
          localtime: '2020-06-23 15:15',
          localtime_epoch: 1592925300,
          utc_offset: '-4.0',
        },
        current: {
          observation_time: '07:15 PM',
          temperature: 29,
          weather_code: 113,
          weather_icons: ['https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'],
          weather_descriptions: ['Sunny'],
          wind_speed: 0,
          wind_degree: 174,
          wind_dir: 'S',
          pressure: 1009,
          precip: 0,
          humidity: 53,
          cloudcover: 0,
          feelslike: 31,
          uv_index: 9,
          visibility: 16,
          is_day: 'yes',
        },
      },
    }, */
  ]);
  const [query, setQuery] = React.useState('');

  useLayoutEffect(() => {
    const element = document.getElementById('end-of-messages');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  });

  async function weatherData(queryMessage) {
    const { author, message } = queryMessage;
    const { data = {} } = await Axios.post('/weather', { sender: author, message: message });
    const responseMessage = Object.assign({
      id: 0,
      author: 'Bot',
      timestamp: '06/05/2020 02:00pm',
      message: data[0].custom,
    });
    await setMessages([...messages, queryMessage, responseMessage]);
    setQuery('');
  }

  async function handleUserInput() {
    const queryMessage = Object.assign({ id: 1, author: 'Vamshi', timestamp: '06/05/2020 02:00pm', message: query });
    weatherData(queryMessage);
  }

  function handleInputText(event) {
    setQuery(event.target.value);
  }

  console.log(messages);
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
            healthy={healthy}
          >
            <Avatar className={classes.avatar} src={bot}></Avatar>
          </StyledBadge>
          <Box className={classes.titleWrapper}>
            <Typography className={classes.title}>Bot</Typography>
            <Typography className={classes.subTitle}>{healthy ? 'Online' : 'Offline'}</Typography>
          </Box>
        </Box>
        <Box className={classes.content}>
          {messages &&
            messages.length &&
            messages.map((messageItem, index) => {
              const { id, author, timestamp, message } = messageItem;
              if (typeof message === 'object') {
                return (
                  <Box className={classes.bubblesContainer}>
                    <WeatherCard id={id} author={author} timestamp={timestamp} message={message} />
                  </Box>
                );
              }
              if (typeof message === 'string') {
                return (
                  <Box className={classes.bubblesContainer}>
                    <ChatBubble id={id} author={author} timestamp={timestamp} message={message} />
                  </Box>
                );
              }
              return null;
            })}
          <Box id="end-of-messages" />
        </Box>
        <Paper component="form" className={classes.actions}>
          <InputBase
            className={classes.input}
            placeholder="Type...."
            inputProps={{ 'aria-label': 'type query to bella' }}
            value={query}
            onChange={handleInputText}
          />
          <IconButton color="primary" className={classes.iconButton} aria-label="query" onClick={handleUserInput}>
            <img src={send} style={{ height: 24, width: 24 }} alt="send" />
          </IconButton>
        </Paper>
      </Paper>
    </CSSTransition>
  );
}

export default ChatWindow;
