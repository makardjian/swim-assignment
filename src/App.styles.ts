import { makeStyles } from '@mui/styles';
import Colors from './styles/Colors';

const useStyles = makeStyles({
  appRoot: {
    backgroundColor: Colors.background['@solitude'],
    minHeight: '100vh',
  },
});

export default useStyles;
