import {Tolgee, DevTools, FormatSimple, BackendFetch} from '@tolgee/react';
import {I18N_DEFAULT_LANG} from '../lib';

export const i18n = (() => {
  const tolgee = Tolgee().use(DevTools()).use(FormatSimple()).use(BackendFetch()).init({
    language: I18N_DEFAULT_LANG,
  });

  return tolgee;
})();
