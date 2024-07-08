import {createElement, FC, useInsertionEffect} from 'react';
import {useI18n} from './use-translate';
import {createNamespaceKey, namespaceContext} from '../lib';

export const withNamespace =
  <P extends object>(path: string, fc: FC<P>) =>
  (props: P) => {
    const ns = createNamespaceKey(path);
    const {addActiveNs, getAllRecords} = useI18n();

    useInsertionEffect(() => {
      if (ns) addActiveNs(ns);
    }, [addActiveNs, getAllRecords, ns]);

    return createElement(namespaceContext.Provider, {value: ns, children: createElement(fc, props)});
  };
