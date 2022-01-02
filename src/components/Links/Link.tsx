import React from 'react';
import { makeStyles } from '@mui/styles';
import type { Link as LinkType } from './Link.type';

const useStyles = makeStyles({
  linkContainer: {
    height: '50px',
    backgroundColor: 'red',
    width: '100%',
    marginTop: '25px',
  },
});

const Link = ({ link }: { link: LinkType }) => {
  const styles = useStyles();
  return <div className={styles.linkContainer}>helo world</div>;
};

export default Link;
