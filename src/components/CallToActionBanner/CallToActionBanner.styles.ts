import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from '../../styles/Theme';

const useStyles = makeStyles(({ colors, typography }: ShortlyTheme) =>
  createStyles({
    card: {
      display: 'flex',
      justifyContent: 'center',
      height: '300px',
      width: '100%',
      marginTop: '150px',
      position: 'relative',
      borderRadius: '0px',
    },
    cardMedia: {
      height: '100%',
      backgroundColor: colors.primary['@darkViolet'],
    },
    cardMediaBox: {
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '100%',
    },
    contentContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      height: '90%',
    },
    callToActionText: {
      paddingBottom: '30px',
      marginBottom: '0px',
      color: colors.background['@white'],
      fontSize: typography.fontSizes.large,
    },
  })
);

export default useStyles;
