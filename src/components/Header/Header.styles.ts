import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: '100px',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
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
