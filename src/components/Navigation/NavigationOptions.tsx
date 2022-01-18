import React from 'react';
import NavItem from './NavItem';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navOptionsContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
  },
});

const NavigationOptions = ({ options }: { options: string[] }) => {
  const styles = useStyles();
  return (
    <div className={styles.navOptionsContainer}>
      {options.map((option: string) => (
        <NavItem text={option} key={option} />
      ))}
    </div>
  );
};

export default NavigationOptions;
