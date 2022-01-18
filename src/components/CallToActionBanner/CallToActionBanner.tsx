import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '../common/Button';
import bannerBackgroundImage from '../../static/images/bg-boost-desktop.svg';
import type { ShortlyTheme } from '../../styles/Theme';
import {
  BANNER_HEADER_TEXT,
  BUTTON_TEXT,
} from './CallToActionBanner.constants';

const useStyles = makeStyles(({ colors, typography }: ShortlyTheme) =>
  createStyles({
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

const CallToActionBanner = () => {
  const styles = useStyles();
  const { colors } = useTheme() as ShortlyTheme;
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '150px',
        position: 'relative',
        borderRadius: '0px',
        height: '300px',
        width: '100%',
      }}
    >
      <CardMedia
        component='img'
        image={bannerBackgroundImage}
        sx={{
          height: '100%',
          backgroundColor: colors.primary['@darkViolet'],
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <div className={styles.contentContainer}>
          <h2 className={styles.callToActionText}>{BANNER_HEADER_TEXT}</h2>
          <Button
            customStyles={{
              paddingLeft: '30px',
              paddingRight: '30px',
            }}
            text={BUTTON_TEXT}
            size='large'
          ></Button>
        </div>
      </Box>
    </Card>
  );
};

export default CallToActionBanner;
