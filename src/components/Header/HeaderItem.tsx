import React from 'react';
import { makeStyles } from '@mui/styles';
import Colors from '../../Colors';

const useStyles = makeStyles({
  item: {
    color: Colors['@gray'],
    fontWeight: '700',
    paddingRight: 25,
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
