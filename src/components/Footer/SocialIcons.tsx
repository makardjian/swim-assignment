import React, { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { ReactComponent as FacebookIcon } from '../../static/images/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../../static/images/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from '../../static/images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../static/images/icon-instagram.svg';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  icon: {
    fill: Colors.background['@white'],
    '&:hover': {
      fill: Colors.primary['@cyan'],
      cursor: 'pointer',
    },
  },
});

const SocialIcons = () => {
  const { icon } = useStyles();
  return (
    <Fragment>
      <FacebookIcon className={icon} />
      <TwitterIcon className={icon} />
      <PinterestIcon className={icon} />
      <InstagramIcon className={icon} />
    </Fragment>
  );
};

export default SocialIcons;
