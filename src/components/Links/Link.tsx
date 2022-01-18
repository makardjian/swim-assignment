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
  const {
    colors: { primary },
  } = useTheme() as ShortlyTheme;

  const linkIsCopied = link?.isCopied;

  return (
    <div className={styles.fullLinkContainer}>
      <a className={styles.originalLink} href={link?.originalLink}>
        {link?.originalLink}
      </a>
      <div className={styles.shortLinkAndButtonContainer}>
        <a className={styles.shortLink} href={link?.shortLink}>
          {link?.shortLink}
        </a>
        <div className={styles.buttonContainer}>
          <CopyToClipboard
            text={link?.shortLink}
            onCopy={() => onCopyLink(link?.id)}
          >
            <Button
              text={`${linkIsCopied ? 'Copied!' : 'Copy'}`}
              shape='square'
              size='large'
              customStyles={{
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: `${linkIsCopied ? '20px' : '30px'}`,
                paddingRight: `${linkIsCopied ? '20px' : '30px'}`,
                backgroundColor: `${
                  linkIsCopied ? primary['@darkViolet'] : primary['@cyan']
                }`,
                '&:hover': {
                  backgroundColor: linkIsCopied
                    ? primary['@darkViolet']
                    : primary.derivatives['@lightCyan'],
                },
              }}
            />
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Link;
