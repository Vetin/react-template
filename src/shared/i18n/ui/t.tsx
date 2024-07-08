import {TProps, T as TolgeeT} from '@tolgee/react';
import {createElement, useContext} from 'react';
import {namespaceContext} from '../lib';
import {useI18n} from '../model';

export const T = (props: TProps) => {
  const contextNs = useContext(namespaceContext);
  const {getInitialOptions} = useI18n();

  const ns = contextNs ?? getInitialOptions().defaultNs;

  return createElement(TolgeeT, {...props, ns});
};
