import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from '../../styles/Theme';

const useStyles = makeStyles(({ colors }: ShortlyTheme) =>
  createStyles({
    fullLinkContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '75px',
      width: '100%',
      minWidth: '900px',
      marginTop: '25px',
      borderRadius: '5px',
      backgroundColor: colors.background['@white'],
    },
    originalLink: {
      paddingLeft: '50px',
      color: colors.neutral['@veryDarkViolet'],
    },
    shortLinkAndButtonContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: '50px',
      paddingLeft: '50px',
      color: colors.primary['@cyan'],
      fontWeight: 700,
    },
    shortLink: {
      fontWeight: 500,
    },
    buttonContainer: {
      paddingLeft: '30px',
    },
  })
);

export default useStyles;
