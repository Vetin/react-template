import {createBrowserRouter} from 'react-router-dom';
import {routes} from 'shared/router';
import {MainPage} from './main';

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {path: routes.main.path, Component: MainPage},
] as const);
