/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CombinedOptions,
  DefaultParamType,
  TFnType,
  TranslationKey,
  useTranslate as useTolgeeTranslate,
} from '@tolgee/react';
import {namespaceContext} from '../lib';
import {useContext} from 'react';

export {useTolgee as useI18n} from '@tolgee/react';

export const useTranslate: typeof useTolgeeTranslate = () => {
  const ns = useContext(namespaceContext);
  const {t, ...rest} = useTolgeeTranslate();

  return {
    ...rest,
    t: ((...args) => {
      const [first] = args;
      if (args.length === 1) {
        // @tolgee-ignore
        if (typeof first === 'string') return t(first, {ns});
        // @tolgee-ignore
        return t({...first, ns: first.ns ?? ns});
      }

      if (args.length === 2) {
        const second = args[1] as string | CombinedOptions<any>;
        // @tolgee-ignore
        if (typeof second === 'string') return t(first as string, second, {ns});
        // @tolgee-ignore
        return t(first as string, {...second, ns: second.ns ?? ns});
      }

      const [, second, third = {ns}] = args;
      // @tolgee-ignore
      return t(first as string, second as string, third as CombinedOptions<any>);
    }) as TFnType<DefaultParamType, string, TranslationKey>,
  };
};
