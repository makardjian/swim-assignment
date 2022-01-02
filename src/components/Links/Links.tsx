import React from 'react';
import { makeStyles } from '@mui/styles';
import Link from './Link';
import type { Link as LinkType } from './Link.type';

const useStyles = makeStyles({
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Links = ({ links }: { links: any[] }) => {
  const styles = useStyles();
  return (
    <div className={styles.linksContainer}>
      {links.map((link: LinkType, index: number) => {
        return <Link link={link} key={index} />;
      })}
    </div>
  );
};

export default Links;
