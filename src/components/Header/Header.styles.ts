import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: '100px',
    backgroundColor: 'white',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1440px',
    minWidth: '700px',
    padding: '40px 16px 0px',
    margin: '0px auto',
  },
  contentSection: {
    display: 'flex',
    alignItems: 'center',
  },
  shortlyLogo: {
    paddingRight: '20px',
  },
});

export default useStyles;
