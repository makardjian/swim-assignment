import React, { useState } from 'react';
import { Card, CardMedia, Box, TextField } from '@mui/material';
import Button from '../common/Button';
import inputBackgroundImage from '../../static/images/bg-shorten-desktop.svg';
import { makeStyles } from '@mui/styles';
import Colors from '../../styles/Colors';

const useStyles = makeStyles({
  inputAndButtonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    padding: '0px 50px',
  },
});

type LinkShortenerProps = {
  generateShortenedLink: (originalUrl: string) => void;
};

const LinkShortener = ({ generateShortenedLink }: LinkShortenerProps) => {
  const styles = useStyles();
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (inputVal: string) => {
    setInputValue(inputVal);
  };

  const onButtonClick = () => {
    generateShortenedLink(inputValue);
    setInputValue('');
  };

  console.log({ inputValue });

  return (
    <div>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '0px auto',
          maxWidth: '1440px',
          width: '100%',
          minWidth: '700px',
          alignItems: 'center',
          position: 'relative',
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
          <div className={styles.inputAndButtonContainer}>
            <TextField
              id='basic'
              label='Shorten a link here...'
              variant='outlined'
              autoComplete='off'
              fullWidth
              value={inputValue}
              onChange={(e) => onInputChange(e?.target?.value)}
              sx={{
                backgroundColor: 'white',
                borderRadius: '10px',
                width: '80%',
                margin: '10px',
              }}
            />
            <Button
              text='Shorten it!'
              size='large'
              shape='square'
              onClick={onButtonClick}
              customStyles={{ margin: '10px' }}
            />
          </div>
        </Box>
      </Card>
    </div>
  );
};

export default LinkShortener;
