import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from '../../styles/Theme';

const useStyles = makeStyles(({ colors, typography }: ShortlyTheme) =>
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
      padding: '0px 50px',
      color: colors.neutral['@veryDarkBlue'],
      textDecoration: 'none',
    },
    shortLinkAndButtonContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px 50px',
      fontWeight: typography.fontWeight.bold,
    },
    shortLink: {
      fontWeight: typography.fontWeight.semiBold,
      textDecoration: 'none',
      color: colors.primary['@cyan'],
    },
    buttonContainer: {
      paddingLeft: '30px',
    },
  })
);

export default useStyles;
