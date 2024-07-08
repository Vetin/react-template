import {createContext} from 'react';

export const I18N_DEFAULT_LANG = 'en';

export const namespaceContext = createContext<string>('');

export const createNamespaceKey = (path: string) => {
  const regex = /src\/((features|entities|widgets|pages)\/[^/]+)\//;
  const match = path.match(regex);
  return match ? match[1] : '';
};
