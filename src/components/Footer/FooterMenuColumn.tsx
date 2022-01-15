import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from '../../styles/Theme';

const useStyles = makeStyles(({ colors, typography }: ShortlyTheme) =>
  createStyles({
    columnHeader: {
      textTransform: 'capitalize',
      fontWeight: typography.fontWeight.extraBold,
    },
    menuItemsContainer: {
      listStyleType: 'none',
      paddingLeft: '0px',
    },
    menuItem: {
      padding: '5px 0px',
      color: colors.neutral['@grayishViolet'],
      '&:hover': {
        cursor: 'pointer',
        color: colors.primary['@cyan'],
      },
    },
  })
);

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
        {menuItems.map((item: string, index: number) => {
          return (
            <li key={`${item}-${index}`} className={styles.menuItem}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterMenuColumn;
