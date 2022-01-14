import React from 'react';
import SocialIcons from './SocialIcons';
import FooterMenuColumn from './FooterMenuColumn';
import { FOOTER_MENU_ITEMS } from './FooterMenuItems.constants';
import useStyles from './Footer.styles';

const SHORTLY_LOGO = 'Shortly';

const Footer = () => {
  const styles = useStyles();
  return (
    <footer className={styles.footer}>
      <div className={styles.contentContainer}>
        <div className={styles.shortlyLogo}>{SHORTLY_LOGO}</div>
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
