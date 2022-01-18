import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from '../../styles/Theme';

const useStyles = makeStyles((theme: ShortlyTheme) => {
  const { colors, typography } = theme;
  return createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0px auto',
      padding: '0px 100px 20px',
      maxWidth: '1440px',
      minWidth: '700px',
    },
    header: {
      fontSize: typography.fontSizes.large,
      fontWeight: typography.fontWeight.bold,
      color: colors.neutral['@veryDarkBlue'],
    },
    subheader: {
      maxWidth: '540px',
      textAlign: 'center',
      margin: 0,
      fontWeight: typography.fontWeight.semiBold,
      color: colors.neutral['@grayishViolet'],
    },
    featuresContainer: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      marginTop: '50px',
      gap: '64px',
      width: 'fit-content',
    },
    horizontalColorBar: {
      position: 'absolute',
      right: '0px',
      top: '160px',
      display: 'block',
      height: '10px',
      width: '100%',
      backgroundColor: colors.primary['@cyan'],
      minWidth: '100px',
      zIndex: -1,
    },
  });
});

export default useStyles;
