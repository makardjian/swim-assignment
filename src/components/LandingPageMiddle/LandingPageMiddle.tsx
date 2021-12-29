import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';
import inputBackgroundImage from '../../static/images/bg-shorten-desktop.svg';
//
import { makeStyles } from '@mui/styles';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  contentContainer: {
    height: '1000px',
    paddingTop: '100px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardMediaContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LandingPageMiddle = () => {
  const styles = useStyles();
  return (
    <div className={styles.contentContainer}>
      <Card
        sx={{
          position: 'relative',
          marginTop: '-650px',
          borderRadius: '10px',
        }}
      >
        <CardMedia
          component='img'
          image={inputBackgroundImage}
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
          <div className={styles.cardMediaContainer}>
            <div>hello world</div>
          </div>
        </Box>
      </Card>
    </div>
  );
};

export default LandingPageMiddle;
