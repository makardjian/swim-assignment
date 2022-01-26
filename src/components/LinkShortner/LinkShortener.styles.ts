import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from '../../styles/Theme';

const useStyles = makeStyles(({ colors }: ShortlyTheme) =>
  createStyles({
    card: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '0px auto',
      maxWidth: '1440px',
      width: '100%',
      minWidth: '900px',
      minHeight: '180px',
      position: 'relative',
      borderRadius: '10px',
    },
    cardMedia: {
      backgroundColor: colors.primary['@darkViolet'],
    },
    contentBox: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    contentFlexContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '40%',
      padding: '55px 50px',
    },
    inputAndButtonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    inputBase: {
      backgroundColor: colors.background['@white'],
      margin: '10px',
      padding: '8px',
      border: '4px solid transparent',
      borderRadius: '10px',
    },
    emptyInputError: {
      color: colors.secondary['@red'],
      fontStyle: 'italic',
      marginLeft: '10px',
    },
  })
);

export default useStyles;
