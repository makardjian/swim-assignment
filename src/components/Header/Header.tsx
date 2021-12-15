import React from 'react';
import logo from '../../static/images/logo.svg';
import useStyles from './Header.styles';
import LeftHeaderItems from './LeftHeaderItems';
import HeaderItem from './HeaderItem';
import { rightSideHeaderItem } from './headerItems';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.leftContent}>
          <img
            src={logo}
            alt='shortly-logo'
            className={classes.shortlyLogo}
          ></img>
          <LeftHeaderItems />
        </div>
        <div className={classes.leftContent}>
          <HeaderItem text={rightSideHeaderItem} />
        </div>
      </div>
    </div>
  );
};

export default Header;
