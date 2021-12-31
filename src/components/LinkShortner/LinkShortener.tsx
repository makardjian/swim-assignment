import React from 'react';
import { Card, CardMedia, Box, TextField } from '@mui/material';
import Button from '../common/Button';
import inputBackgroundImage from '../../static/images/bg-shorten-desktop.svg';
import { makeStyles } from '@mui/styles';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  container: {
    padding: '100px 64px 150px',
  },
  linkShortenerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    padding: '0px 50px',
  },
});

const LinkShortener = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '0px auto',
          maxWidth: '1440px',
          minWidth: '700px',
          alignItems: 'center',
          position: 'relative',
          borderRadius: '10px',
          bottom: 200,
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
          <div className={styles.linkShortenerContainer}>
            <TextField
              id='basic'
              label='Shorten a link here...'
              variant='outlined'
              autoComplete='off'
              fullWidth
              sx={{
                backgroundColor: 'white',
                borderRadius: '10px',
                width: '80%',
              }}
            />
            <Button text='Shorten it!' size='large' shape='square' />
          </div>
        </Box>
      </Card>
    </div>
  );
};

export default LinkShortener;
