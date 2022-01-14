import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from './styles/Theme';

const useStyles = makeStyles((theme: ShortlyTheme) =>
  createStyles({
    appRoot: {
      backgroundColor: theme.colors.background['@solitude'],
      zIndex: 1,
      minHeight: '100vh',
    },
    linkShortenerAndLinksContainer: {
      display: 'flex',
      flexDirection: 'column',
      margin: '-100px auto 0px auto',
      paddingTop: '0px',
      padding: '0px 100px 150px 100px',
    },
  })
);

export default useStyles;
