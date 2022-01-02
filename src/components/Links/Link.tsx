import React from 'react';
import Button from '../common/Button';
import { makeStyles } from '@mui/styles';
import type { Link as LinkType } from './Link.type';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  fullLinkContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '75px',
    width: '100%',
    marginTop: '25px',
    borderRadius: '10px',
    backgroundColor: Colors.background['@white'],
  },
  originalLink: {
    paddingLeft: '50px',
  },
  shortLinkAndButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: '50px',
    color: Colors.primary['@cyan'],
    fontWeight: 900,
  },
  buttonContainer: {
    paddingLeft: '30px',
  },
});

const Link = ({ link }: { link: LinkType }) => {
  const styles = useStyles();
  return (
    <div className={styles.fullLinkContainer}>
      <div className={styles.originalLink}>{link.originalLink}</div>
      <div className={styles.shortLinkAndButtonContainer}>
        <span>{link.shortLink}</span>
        <div className={styles.buttonContainer}>
          <Button
            text='Copy'
            shape='square'
            size='large'
            customStyles={{
              padding: '10px 35px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Link;
