import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appRoot: {
    backgroundColor: 'white',
    minHeight: '100vh',
    justifyContent: 'center',
    display: 'flex',
  },
  appContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 0px',
    width: '75%',
  },
});

export default useStyles;
