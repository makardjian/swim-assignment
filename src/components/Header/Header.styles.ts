import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: '100px',
    backgroundColor: 'white',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '40px 16px 0px',
    margin: '0px 200px',
  },
  contentSection: {
    display: 'flex',
  },
  shortlyLogo: {
    paddingRight: '20px',
  },
});

export default useStyles;
