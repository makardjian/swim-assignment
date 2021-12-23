import React from 'react';
import { makeStyles } from '@mui/styles';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  item: {
    color: Colors.neutral['@grayishViolet'],
    fontWeight: '700',
    paddingRight: 25,
    '&:hover': {
      cursor: 'pointer',
      color: Colors.neutral['@veryDarkViolet:'],
    },
  },
});

type HeaderItemProps = {
  text: string;
};

const HeaderItem = ({ text }: HeaderItemProps) => {
  const classes = useStyles();
  return <div className={classes.item}>{text}</div>;
};

export default HeaderItem;
