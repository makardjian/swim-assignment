import React from 'react';
import { Button as MUIButton } from '@mui/material';
import Colors from '../../styles/Colors';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  shape?: 'square' | 'oval';
  customStyles?: any;
};

const Button = ({
  text,
  onClick,
  size,
  fullWidth,
  shape = 'oval',
  customStyles,
}: ButtonProps) => {
  const shapeIsSquare = shape === 'square';
  return (
    <MUIButton
      variant='contained'
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        whiteSpace: 'nowrap',
        margin: '0px auto',
        padding: `${shapeIsSquare ? '15px 35px' : 'inheret'}`,
        borderRadius: `${shapeIsSquare ? '10px' : '20px'}`,
        fontWeight: '700',
        textTransform: 'capitalize',
        backgroundColor: Colors.primary['@cyan'],
        '&:hover': {
          backgroundColor: Colors.primary.derivatives['@lightCyan'],
        },
        ...customStyles,
      }}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
