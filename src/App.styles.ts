import { makeStyles } from '@mui/styles';
import Colors from './styles/Colors';

const useStyles = makeStyles({
  appRoot: {
    backgroundColor: Colors.background['@solitude'],
    minHeight: '100vh',
  },
  linkShortenerAndLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '-100px auto 0px auto',
    padding: '0px 100px',
  },
});

export default useStyles;
