import React, { useEffect, useState } from 'react';
import { cx, css } from '@emotion/css';
import { Card, CardMedia, Box, InputBase } from '@mui/material';
import { useTheme } from '@material-ui/core/styles';
import { usePrevious } from '../../hooks/usePrevious';
import Button from '../common/Button';
import useStyles from './LinkShortener.styles';
import type { ShortlyTheme } from '../../styles/Theme';
import inputBackgroundImage from '../../static/images/bg-shorten-desktop.svg';
import { BUTTON_TEXT, INPUT_PLACEHOLDER } from './LinkShortener.constants';

type LinkShortenerProps = {
  generateShortenedLink: (originalUrl: string) => void;
  errorMessage: string;
  clearErrorMessage: () => void;
  linkCount: number;
};

const ENTER_KEY = 'Enter';

const LinkShortener = (props: LinkShortenerProps) => {
  const { generateShortenedLink, errorMessage, clearErrorMessage, linkCount } =
    props;
  const prevLinkCount: number = usePrevious(linkCount);
  const styles = useStyles();
  const { colors } = useTheme() as ShortlyTheme;
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (inputVal: string) => {
    if (errorMessage) {
      clearErrorMessage();
    }
    setInputValue(inputVal);
  };

  const onGenerateShortenedLink = () => {
    generateShortenedLink(inputValue);
  };

  const onKeyPress = (event: KeyboardEvent) => {
    if (event.key === ENTER_KEY) {
      onGenerateShortenedLink();
    }
  };

  useEffect(() => {
    if (linkCount > prevLinkCount) {
      setInputValue('');
    }
  }, [linkCount]);

  const inputBaseClass = errorMessage
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
                error={errorMessage.length ? true : false}
                // @ts-expect-error
                onKeyPress={(e) => onKeyPress(e)}
              />
              <Button
                text={BUTTON_TEXT}
                size='large'
                shape='square'
                onClick={onGenerateShortenedLink}
                customStyles={{ margin: '10px' }}
              />
            </div>
            {errorMessage && (
              <span className={styles.emptyInputError}>{errorMessage}</span>
            )}
          </div>
        </Box>
      </Card>
    </div>
  );
};

export default LinkShortener;
