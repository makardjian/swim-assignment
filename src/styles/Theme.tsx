import { createTheme } from '@material-ui/core/styles';
import { Theme as ThemeInterface } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import Typography from './Typography';
import Colors from './Colors';
import type { PropsWithChildren } from 'react';

const baseTheme = {
  typography: Typography,
  colors: Colors,
};

export type ShortlyTheme = ThemeInterface & {
  typography: typeof Typography;
  colors: typeof Colors;
};

export function createShortlyTheme(): ShortlyTheme {
  const theme = createTheme(baseTheme);
  return theme as ShortlyTheme;
}

export function Theme({ children }: { children: PropsWithChildren<{}> }) {
  return <ThemeProvider theme={createShortlyTheme()}>{children}</ThemeProvider>;
}
