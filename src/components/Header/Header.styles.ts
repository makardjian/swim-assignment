import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: '100px',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftContent: {
    display: 'flex',
    alignItems: 'center',
  },
  rightContent: {
    alignItems: 'center',
  },
  shortlyLogo: {
    paddingRight: '20px',
  },
});

export default useStyles;
