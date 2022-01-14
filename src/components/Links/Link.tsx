import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '../common/Button';
import type { Link as LinkType } from './Link.type';
import useStyles from './Link.styles';
import { ShortlyTheme } from '../../styles/Theme';

type LinkProps = {
  link: LinkType;
  onCopyLink: (id: string) => void;
};

const Link = ({ link, onCopyLink }: LinkProps) => {
  const styles = useStyles();
  const { colors } = useTheme() as ShortlyTheme;

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
                    ? colors.primary['@darkViolet']
                    : colors.primary['@cyan']
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
