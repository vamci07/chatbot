import React, { useLayoutEffect } from 'react';
import { Box, makeStyles, Paper, InputBase, IconButton } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import send from 'static/images/send.png';
import ChatBubble from './ChatBubble';
import Axios from 'axios';
import WeatherCard from './WeatherCard';
import StockCard from './StockCard';
import ChatHeader from './ChatHeader';
import './style.css';

const chatStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 132,
    right: 60,
    height: 640,
    width: 384,
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  anchorOriginBottomRightRectangle: {
    right: 12,
    bottom: 6,
  },
  content: {
    height: 458,
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

  async function queryRasa(queryMessage) {
    const { author, message } = queryMessage;
    const { data = {} } = await Axios.post('/rasa', { sender: author, message: message });
    const responseMessage = Object.assign({
      id: 0,
      author: 'Bot',
      timestamp: '06/05/2020 02:00pm',
      message: data,
    });
    await setMessages([...messages, queryMessage, responseMessage]);
    setQuery('');
  }

  async function handleUserInput() {
    const queryMessage = Object.assign({ id: 1, author: 'Vamshi', timestamp: '06/05/2020 02:00pm', message: query });
    queryRasa(queryMessage);
  }

  function handleInputText(event) {
    setQuery(event.target.value);
  }

  const classes = chatStyles();
  return (
    <CSSTransition in={open} timeout={300} classNames="chat" unmountOnExit>
      <Paper className={classes.root} elevation={0}>
        <ChatHeader healthy={healthy}></ChatHeader>
        <Box className={classes.content}>
          {messages &&
            messages.length &&
            messages.map((messageItem, index) => {
              const { id, author, timestamp, message } = messageItem;
              const { custom: { payload = undefined, data = {} } = {}, text = undefined } = message[0];
              if (payload === 'weather') {
                return (
                  <Box className={classes.bubblesContainer}>
                    <WeatherCard id={id} author={author} timestamp={timestamp} message={data} />
                  </Box>
                );
              }
              if (payload === 'stock') {
                return (
                  <Box className={classes.bubblesContainer}>
                    <StockCard id={id} author={author} timestamp={timestamp} message={data} />
                  </Box>
                );
              }
              if (!payload) {
                return (
                  <Box className={classes.bubblesContainer}>
                    <ChatBubble id={id} author={author} timestamp={timestamp} message={text || message} />
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
