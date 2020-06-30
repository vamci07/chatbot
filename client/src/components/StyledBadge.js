import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  badge: {
    backgroundColor: (props) => (props.healthy ? '#44b700' : '#f44336'),
    color: (props) => (props.healthy ? '#44b700' : '#f44336'),
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
});

function MuiBadge(props) {
  const { classes, healthy, ...other } = props;
  return <Badge classes={{ badge: classes.badge }} {...other} />;
}

const StyledBadge = withStyles(styles, { withTheme: true })(MuiBadge);

export default StyledBadge;
