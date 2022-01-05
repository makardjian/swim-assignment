import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import bannerBackgroundImage from '../../static/images/bg-boost-desktop.svg';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  callToActionText: {
    textAlign: 'center',
    padding: '30px',
  },
});

const CallToActionBanner = () => {
  const styles = useStyles();
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0px auto',
        width: '100%',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <CardMedia
        component='img'
        image={bannerBackgroundImage}
        sx={{
          height: 'auto',
          width: '100%',
          backgroundColor: Colors.primary['@darkViolet'],
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          color: 'white',
        }}
      >
        <h2 className={styles.callToActionText}>Boost Your Links today</h2>
      </Box>
    </Card>
  );
};

export default CallToActionBanner;
