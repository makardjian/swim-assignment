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
      justifyContent: 'center',
      height: '100%',
      padding: '0px 50px',
    },
    inputAndButtonContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    inputBase: {
      backgroundColor: colors.background['@white'],
      margin: '10px',
      padding: '7px',
      border: '4px solid transparent',
      borderRadius: '10px',
    },
    emptyInputError: {
      color: colors.secondary['@red'],
      fontStyle: 'italic',
      marginLeft: '10px',
      marginTop: '-5px',
    },
  })
);

export default useStyles;
