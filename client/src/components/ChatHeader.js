import React from 'react';
import styled from 'styled-components';
import { Avatar, Box, Typography, makeStyles } from '@material-ui/core';
import botImg from 'static/images/M.png';
import StyledBadge from './StyledBadge';

const Header = styled.div`
  background: #16153d;
  color: #fff;
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const headerStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText(theme.palette.common.white),
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(1),
  },
  titleWrapper: {
    marginLeft: theme.spacing(2),
  },
  title: {
    fontSize: theme.typography.pxToRem(20),
    lineHeight: '40px',
    fontWeight: theme.typography.fontWeightBold,
  },
  subTitle: {
    fontSize: theme.typography.pxToRem(10),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ChatHeader({ healthy = true }) {
  const classes = headerStyles({ healthy });
  return (
    <Header>
      <StyledBadge
        overlap="circle"
        variant="dot"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        healthy={healthy}
      >
        <Avatar className={classes.avatar} src={botImg}></Avatar>
      </StyledBadge>
      <Box className={classes.titleWrapper}>
        <Typography className={classes.title}>Smart Bot</Typography>
        <Typography className={classes.subTitle}>
          This is a sample bot to get weather & stock info. It's still work in progress, and new features get added.
        </Typography>
      </Box>
    </Header>
  );
}
