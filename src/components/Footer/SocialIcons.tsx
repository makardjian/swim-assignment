import React, { Fragment } from 'react';
import { ReactComponent as FacebookIcon } from '../../static/images/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../../static/images/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from '../../static/images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../static/images/icon-instagram.svg';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from '../../styles/Theme';

const useStyles = makeStyles(({ colors }: ShortlyTheme) =>
  createStyles({
    icon: {
      fill: colors.background['@white'],
      '&:hover': {
        fill: colors.primary['@cyan'],
        cursor: 'pointer',
      },
    },
  })
);

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
