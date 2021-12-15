import React, { Fragment } from 'react';
import HeaderItem from './HeaderItem';
import { leftSideHeaderOptions } from './headerItems';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  leftHeaderItemsContnentContainer: {
    display: 'flex',
    paddingLeft: 20,
  },
});

const LeftHeaderItems = () => {
  const classes = useStyles();
  return (
    <div className={classes.leftHeaderItemsContnentContainer}>
      {leftSideHeaderOptions.map((option: string) => (
        <HeaderItem text={option} />
      ))}
    </div>
  );
};

export default LeftHeaderItems;
