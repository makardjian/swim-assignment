import React from 'react';
import { makeStyles } from '@mui/styles';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  columnHeader: {
    textTransform: 'capitalize',
    fontWeight: '900',
  },
  menuItemsContainer: {
    listStyleType: 'none',
    paddingLeft: '0px',
  },
  menuItem: {
    padding: '5px 0px',
    color: Colors.neutral['@grayishViolet'],
    '&:hover': {
      cursor: 'pointer',
      color: Colors.primary['@cyan'],
    },
  },
});

const FooterMenuColumn = ({
  columnHeader,
  menuItems,
}: {
  columnHeader: string;
  menuItems: string[];
}) => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.columnHeader}>{columnHeader}</div>
      <ul className={styles.menuItemsContainer}>
        {menuItems.map((item: string) => {
          return <li className={styles.menuItem}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterMenuColumn;
