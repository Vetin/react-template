import {HelloWorld} from 'features/hello-world';
import {AppLayout} from 'widgets/app-layout';

export const MainPage = () => (
  <AppLayout>
    <div>main</div>
    <HelloWorld />
  </AppLayout>
);
