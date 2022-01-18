import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from './styles/Theme';

const useStyles = makeStyles((theme: ShortlyTheme) =>
  createStyles({
    appRoot: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
    },
    linkShortenerAndLinksContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '-100px',
      padding: '0px 100px 100px 100px',
    },
  })
);

export default useStyles;
