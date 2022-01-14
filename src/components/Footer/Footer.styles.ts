import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from '../../styles/Theme';

const useStyles = makeStyles(({ colors, typography }: ShortlyTheme) =>
  createStyles({
    footer: {
      height: '350px',
      backgroundColor: colors.neutral['@veryDarkViolet'],
      color: colors.background['@white'],
    },
    contentContainer: {
      display: 'flex',
      padding: '50px',
      justifyContent: 'space-around',
    },
    shortlyLogo: {
      fontSize: typography.fontSizes.large,
      fontWeight: typography.fontWeight.bold,
      paddingRight: '150px',
    },
    menuContainer: {
      display: 'flex',
      gap: '75px',
    },
    socialIconsContainer: {
      display: 'flex',
      gap: '25px',
      paddingLeft: '20px',
    },
  })
);

export default useStyles;
