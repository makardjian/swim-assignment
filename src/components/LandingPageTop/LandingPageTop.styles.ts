import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from '../../styles/Theme';

const useStyles = makeStyles((theme: ShortlyTheme) =>
  createStyles({
    container: {
      padding: '75px 100px 150px',
      backgroundColor: theme.colors.background['@white'],
    },
    contentContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0px auto',
      maxWidth: '1440px',
      minWidth: '700px',
    },
    textAndButtonContainer: {
      width: '50%',
    },
    mainHeaderText: {
      fontSize: theme.typography.fontSizes.extraLarge,
      fontWeight: theme.typography.fontWeight.bold,
      letterSpacing: '-2px',
      color: theme.colors.neutral['@veryDarkBlue'],
    },
    subHeaderTextContainer: {
      width: '80%',
    },
    subHeaderText: {
      color: theme.colors.neutral['@grayishViolet'],
    },
    buttonContainer: {
      padding: '30px 0px',
    },
    imageContainer: {
      width: '50%',
    },
    image: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  })
);

export default useStyles;
