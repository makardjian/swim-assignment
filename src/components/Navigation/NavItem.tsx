import React from 'react';
import { makeStyles } from '@mui/styles';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  item: {
    color: Colors.neutral['@grayishViolet'],
    fontWeight: 700,
    paddingRight: '25px',
    '&:hover': {
      cursor: 'pointer',
      color: Colors.neutral['@veryDarkViolet'],
    },
  },
});

const NavItem = ({ text }: { text: string }) => {
  const styles = useStyles();
  return <div className={styles.item}>{text}</div>;
};

export default NavItem;
