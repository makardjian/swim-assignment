import { makeStyles } from '@mui/styles';
import Colors from './styles/Colors';

const white = Colors.background['@white'];
const solitude = Colors.background['@solitude'];

const useStyles = makeStyles({
  appRoot: {
    background: `linear-gradient(to bottom, ${white} 0%, ${white} 50%, ${solitude} 50%, ${solitude} 50%)`,
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
