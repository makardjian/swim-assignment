import React from 'react';
import { Button as MUIButton } from '@mui/material';
import Colors from '../../styles/Colors';

type ButtonProps = {
  text: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
};

const Button = ({ text, size, fullWidth }: ButtonProps) => {
  return (
    <MUIButton
      variant='contained'
      size={size}
      fullWidth={fullWidth}
      sx={{
        backgroundColor: Colors.primary['@cyan'],
        borderRadius: '20px',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
        fontWeight: '900',
        '&:hover': {
          backgroundColor: Colors.primary.derivatives['@lightCyan'],
        },
      }}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
