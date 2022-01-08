import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '../common/Button';
import bannerBackgroundImage from '../../static/images/bg-boost-desktop.svg';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    height: '100%',
  },
  callToActionText: {
    paddingBottom: '30px',
    marginBottom: '0px',
    color: 'white',
    fontSize: '40px',
  },
});

const CallToActionBanner = () => {
  const styles = useStyles();
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '150px',
        position: 'relative',
        borderRadius: '0px',
      }}
    >
      <CardMedia
        component='img'
        image={bannerBackgroundImage}
        sx={{
          backgroundColor: Colors.primary['@darkViolet'],
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
          <h2 className={styles.callToActionText}>Boost Your Links today</h2>
          <Button
            customStyles={{
              paddingLeft: '30px',
              paddingRight: '30px',
            }}
            text='Get Started'
            size='large'
          ></Button>
        </div>
      </Box>
    </Card>
  );
};

export default CallToActionBanner;
