import React from 'react';
import { makeStyles } from '@mui/styles';
import Link from './Link';
import type { Link as LinkType } from './Link.type';

const useStyles = makeStyles({
  linksContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '1440px',
    margin: '0px auto',
  },
});

type LinksProps = {
  links: LinkType[];
  onCopyLink: (id: string) => void;
};

const Links = ({ links, onCopyLink }: LinksProps) => {
  const styles = useStyles();
  return (
    <div className={styles.linksContainer}>
      {links.map((link: LinkType) => {
        return <Link link={link} key={link.id} onCopyLink={onCopyLink} />;
      })}
    </div>
  );
};

export default Links;
