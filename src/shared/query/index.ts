import {QueryClient, QueryClientProvider as TanstackQueryClientProvider} from '@tanstack/react-query';
import {createElement, PropsWithChildren} from 'react';

export const queryClient = new QueryClient();

export const QueryClientProvider = ({children}: PropsWithChildren) =>
  createElement(TanstackQueryClientProvider, {client: queryClient}, children);
