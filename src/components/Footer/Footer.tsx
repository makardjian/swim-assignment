import React from 'react';
import { makeStyles } from '@mui/styles';
import Colors from '../../styles/Colors';
import { FOOTER_MENU_ITEMS } from './FooterMenuItems';

const useStyles = makeStyles({
  footer: {
    height: '350px',
    backgroundColor: Colors.neutral['@veryDarkViolet'],
  },
  contentContainer: {
    display: 'flex',
    padding: '50px',
    justifyContent: 'space-around',
  },
  shortlyLogo: {
    fontSize: '36px',
    color: 'white',
    fontWeight: '700',
  },
  menuContainer: {
    display: 'flex',
  },
});

const Footer = () => {
  const styles = useStyles();
  return (
    <footer className={styles.footer}>
      <div className={styles.contentContainer}>
        <div className={styles.shortlyLogo}>Shortly</div>
        <div className={styles.menuContainer}>
          {Object.keys(FOOTER_MENU_ITEMS).map((key, index) => {
            return (
              <FooterMenuColumn
                columnHeader={key}
                menuItems={FOOTER_MENU_ITEMS[key]}
                key={index}
              />
            );
          })}
        </div>
        <div></div>
      </div>
    </footer>
  );
};

const FooterMenuColumn = ({
  columnHeader,
  menuItems,
}: {
  columnHeader: string;
  menuItems: string[];
}) => {
  return (
    <div>
      <div>{columnHeader}</div>
      <ul>
        {menuItems.map((item: string) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
