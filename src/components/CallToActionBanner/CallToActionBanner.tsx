import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';
import Button from '../common/Button';
import bannerBackgroundImage from '../../static/images/bg-boost-desktop.svg';
import useStyles from './CallToActionBanner.styles';
import {
  BANNER_HEADER_TEXT,
  BUTTON_TEXT,
} from './CallToActionBanner.constants';

const CallToActionBanner = () => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardMedia
        component='img'
        image={bannerBackgroundImage}
        className={styles.cardMedia}
      />
      <Box className={styles.cardMediaBox}>
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
