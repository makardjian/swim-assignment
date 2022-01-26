import React from 'react';
import { Button as MUIButton } from '@mui/material';
import { useTheme } from '@material-ui/core/styles';
import { ShortlyTheme } from '../../styles/Theme';

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
  const { colors, typography } = useTheme() as ShortlyTheme;
  const shapeIsSquare: boolean = shape === 'square';
  return (
    <MUIButton
      variant='contained'
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        whiteSpace: 'nowrap',
        margin: '0px auto',
        padding: `${shapeIsSquare ? '15px 35px' : undefined}`,
        borderRadius: `${shapeIsSquare ? '10px' : '20px'}`,
        fontWeight: typography.fontWeight.bold,
        textTransform: 'capitalize',
        backgroundColor: colors.primary['@cyan'],
        '&:hover': {
          backgroundColor: colors.primary.derivatives['@lightCyan'],
        },
        ...customStyles,
      }}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
