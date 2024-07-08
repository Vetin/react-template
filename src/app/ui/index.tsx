import '@mantine/core/styles/global.css';

import {RouterProvider} from 'react-router-dom';

import {router} from 'pages/index';
import {I18nProvider} from 'shared/i18n';
import {ThemeProvider} from 'shared/theme';
import {QueryClientProvider} from 'shared/query';

export const App = () => (
  <QueryClientProvider>
    <ThemeProvider>
      <I18nProvider>
        <RouterProvider router={router} />
      </I18nProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
