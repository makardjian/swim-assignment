import { makeStyles } from '@mui/styles';
import Colors from './styles/Colors';

const useStyles = makeStyles({
  appRoot: {
    backgroundColor: Colors.background['@solitude'],
    zIndex: 1,
    minHeight: '100vh',
    paddingBottom: '400px',
  },
  linkShortenerAndLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '-100px auto 0px auto',
    paddingTop: '0px',
    padding: '0px 100px 150px 100px',
  },
});

export default useStyles;
