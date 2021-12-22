import React from 'react';
import LeftHeaderItems from './LeftHeaderItems';
import HeaderItem from './HeaderItem';
import Button from '../common/Button';
import logo from '../../static/images/logo.svg';
import useStyles from './Header.styles';
import { rightSideHeaderItem } from './headerItems';
import Colors from '../../Colors';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.contentSection}>
          <img
            src={logo}
            alt='shortly-logo'
            className={classes.shortlyLogo}
          ></img>
          <LeftHeaderItems />
        </div>
        <div className={classes.contentSection}>
          <HeaderItem text={rightSideHeaderItem} />
          <Button text='Sign Up' />
        </div>
      </div>
    </div>
  );
};

export default Header;
