import React from 'react';
import { Button as MUIButton } from '@mui/material';
import Colors from '../../styles/Colors';

type ButtonProps = {
  text: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  shape?: 'square' | 'oval';
};

const Button = ({ text, size, fullWidth, shape = 'oval' }: ButtonProps) => {
  const shapeIsSquare = shape === 'square';
  return (
    <MUIButton
      variant='contained'
      size={size}
      fullWidth={fullWidth}
      sx={{
        whiteSpace: 'nowrap',
        margin: '0px auto',
        padding: `${shapeIsSquare ? '15px 35px' : 'inheret'}`,
        borderRadius: `${shapeIsSquare ? '10px' : '20px'}`,
        fontFamily: 'Poppins',
        fontWeight: '900',
        textTransform: 'capitalize',
        backgroundColor: Colors.primary['@cyan'],
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
