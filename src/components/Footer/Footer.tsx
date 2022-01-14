import React from 'react';
import SocialIcons from './SocialIcons';
import { makeStyles } from '@mui/styles';
import FooterMenuColumn from './FooterMenuColumn';
import Colors from '../../styles/Colors';
import { FOOTER_MENU_ITEMS } from './FooterMenuItems.constants';

const useStyles = makeStyles({
  footer: {
    height: '350px',
    backgroundColor: Colors.neutral['@veryDarkViolet'],
    color: Colors.background['@white'],
  },
  contentContainer: {
    display: 'flex',
    padding: '50px',
    justifyContent: 'space-around',
  },
  shortlyLogo: {
    fontSize: '40px',
    fontWeight: '700',
    paddingRight: '150px',
  },
  menuContainer: {
    display: 'flex',
    gap: '75px',
  },
  socialIconsContainer: {
    display: 'flex',
    gap: '25px',
    paddingLeft: '20px',
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
        <div className={styles.socialIconsContainer}>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
