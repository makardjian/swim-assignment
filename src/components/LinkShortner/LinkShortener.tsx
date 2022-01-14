import React, { useState } from 'react';
import { Card, CardMedia, Box, TextField } from '@mui/material';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';
import Button from '../common/Button';
import inputBackgroundImage from '../../static/images/bg-shorten-desktop.svg';
import type { ShortlyTheme } from '../../styles/Theme';
import { BUTTON_TEXT, TEXT_FIELD_PLACEHOLDER } from './LinkShortener.constants';

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
  const theme = useTheme() as ShortlyTheme;
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (inputVal: string) => {
    setInputValue(inputVal);
  };

  const onButtonClick = () => {
    generateShortenedLink(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '0px auto',
          maxWidth: '1440px',
          width: '100%',
          minWidth: '900px',
          position: 'relative',
          borderRadius: '10px',
        }}
      >
        <CardMedia
          component='img'
          image={inputBackgroundImage}
          sx={{
            backgroundColor: theme.colors.primary['@darkViolet'],
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <div className={styles.inputAndButtonContainer}>
            <TextField
              id='basic'
              label={TEXT_FIELD_PLACEHOLDER}
              variant='outlined'
              autoComplete='off'
              fullWidth
              value={inputValue}
              onChange={(e) => onInputChange(e?.target?.value)}
              sx={{
                backgroundColor: theme.colors.background['@white'],
                borderRadius: '10px',
                width: '80%',
                margin: '10px',
              }}
            />
            <Button
              text={BUTTON_TEXT}
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
