import {MantineProvider} from '@mantine/core';
import {PropsWithChildren} from 'react';
import {themeConfig} from './lib';

export const ThemeProvider = ({children}: PropsWithChildren) => (
  <MantineProvider classNamesPrefix="scrapps" theme={themeConfig}>
    {children}
  </MantineProvider>
);
