/* eslint-disable react-refresh/only-export-components */
import {TolgeeProvider} from '@tolgee/react';
import {i18n} from '../model';
import {PropsWithChildren} from 'react';

export const I18nProvider = ({children}: PropsWithChildren) => (
  <TolgeeProvider tolgee={i18n}>{children}</TolgeeProvider>
);

export {T} from './t';
