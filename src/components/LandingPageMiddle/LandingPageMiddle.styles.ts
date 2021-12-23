import { makeStyles } from '@mui/styles';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  contentContainer: {
    height: '1000px',
    paddingTop: '100px',
    display: 'flex',
    justifyContent: 'center',
  },
  inputBackgroundImage: {
    borderRadius: '10px',
    backgroundColor: Colors.primary['@darkViolet'],
  },
});

export default useStyles;
