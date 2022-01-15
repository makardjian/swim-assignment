import React, { useState } from 'react';
import { cx, css } from '@emotion/css';
import { Card, CardMedia, Box, InputBase } from '@mui/material';
import { useTheme } from '@material-ui/core/styles';
import Button from '../common/Button';
import useStyles from './LinkShortener.styles';
import type { ShortlyTheme } from '../../styles/Theme';
import inputBackgroundImage from '../../static/images/bg-shorten-desktop.svg';
import {
  BUTTON_TEXT,
  INPUT_PLACEHOLDER,
  EMPTY_INPUT_ERROR_MSG,
} from './LinkShortener.constants';

type LinkShortenerProps = {
  generateShortenedLink: (originalUrl: string) => void;
};

const LinkShortener = ({ generateShortenedLink }: LinkShortenerProps) => {
  const styles = useStyles();
  const { colors } = useTheme() as ShortlyTheme;
  const [inputValue, setInputValue] = useState('');
  const [emptyInputError, setEmptyInputError] = useState(false);

  const onInputChange = (inputVal: string) => {
    if (emptyInputError) {
      setEmptyInputError(false);
    }
    setInputValue(inputVal);
  };

  const onButtonClick = () => {
    if (!inputValue.length) {
      setEmptyInputError(true);
      return;
    }
    generateShortenedLink(inputValue);
    setInputValue('');
  };

  const inputBaseClass = emptyInputError
    ? cx(styles.inputBase, css({ borderColor: colors.secondary['@red'] }))
    : styles.inputBase;

  return (
    <div>
      <Card className={styles.card} sx={{ borderRadius: '10px' }}>
        <CardMedia
          component='img'
          image={inputBackgroundImage}
          className={styles.cardMedia}
        />
        <Box className={styles.contentBox}>
          <div className={styles.contentFlexContainer}>
            <div className={styles.inputAndButtonContainer}>
              <InputBase
                id='basic'
                className={inputBaseClass}
                placeholder={INPUT_PLACEHOLDER}
                autoComplete='off'
                fullWidth
                value={inputValue}
                onChange={(e) => onInputChange(e?.target?.value)}
                error={emptyInputError}
              />
              <Button
                text={BUTTON_TEXT}
                size='large'
                shape='square'
                onClick={onButtonClick}
                customStyles={{ margin: '10px' }}
              />
            </div>
            {emptyInputError && (
              <span className={styles.emptyInputError}>
                {EMPTY_INPUT_ERROR_MSG}
              </span>
            )}
          </div>
        </Box>
      </Card>
    </div>
  );
};

export default LinkShortener;
