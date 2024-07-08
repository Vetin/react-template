import {AppShell} from '@mantine/core';
import {PropsWithChildren} from 'react';

export const AppLayout = ({children}: PropsWithChildren) => (
  <AppShell>
    <AppShell.Main>{children}</AppShell.Main>
  </AppShell>
);
