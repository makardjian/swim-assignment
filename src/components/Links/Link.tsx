import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
    minWidth: '900px',
    marginTop: '25px',
    borderRadius: '5px',
    backgroundColor: Colors.background['@white'],
  },
  originalLink: {
    paddingLeft: '50px',
    color: Colors.neutral['@veryDarkViolet'],
  },
  shortLinkAndButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: '50px',
    paddingLeft: '50px',
    color: Colors.primary['@cyan'],
    fontWeight: 700,
  },
  shortLink: {
    fontWeight: 500,
  },
  buttonContainer: {
    paddingLeft: '30px',
  },
});

const Link = ({
  link,
  onCopyLink,
}: {
  link: LinkType;
  onCopyLink: (id: string) => void;
}) => {
  const styles = useStyles();

  return (
    <div className={styles.fullLinkContainer}>
      <div className={styles.originalLink}>{link.originalLink}</div>
      <div className={styles.shortLinkAndButtonContainer}>
        <span className={styles.shortLink}>{link.shortLink}</span>
        <div className={styles.buttonContainer}>
          <CopyToClipboard
            text={link.shortLink}
            onCopy={() => onCopyLink(link.id)}
          >
            <Button
              text={`${link.isCopied ? 'Copied!' : 'Copy'}`}
              shape='square'
              size='large'
              customStyles={{
                padding: '10px 35px',
                backgroundColor: `${
                  link.isCopied
                    ? Colors.primary['@darkViolet']
                    : Colors.primary['@cyan']
                }`,
              }}
            />
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Link;
