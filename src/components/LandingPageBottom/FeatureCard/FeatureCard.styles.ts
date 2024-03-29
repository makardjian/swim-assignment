import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { ShortlyTheme } from '../../../styles/Theme';
import type { FeatureCardProps } from './FeatureCard';

const useStyles = makeStyles((theme: ShortlyTheme) => {
  const { colors, typography } = theme;
  return createStyles({
    cardContainer: (props: FeatureCardProps) => ({
      marginTop: props.feature.marginTop,
    }),
    iconBall: {
      marginLeft: '32px',
      display: 'grid',
      placeItems: 'center',
      width: '75px',
      height: '75px',
      borderRadius: '50%',
      backgroundColor: colors.primary['@darkViolet'],
      position: 'relative',
    },
    icon: {
      height: '45%',
      width: '45%',
    },
    card: {
      width: '300px',
      marginTop: '-40px',
    },
    textContent: {
      margin: '30px',
      paddingTop: '30px',
    },
    title: {
      fontSize: '20px',
      fontWeight: typography.fontWeight.extraBold,
      color: colors.primary['@veryDarkViolet'],
      paddingBottom: '10px',
    },
    description: {
      color: colors.neutral['@grayishViolet'],
      fontSize: '14px',
      lineHeight: '1.75',
    },
  });
});

export default useStyles;
