import { Navigation } from 'react-native-navigation';

import { Home } from './home/Home';
import { Counter } from './counter/Counter';
import Loading from './loading/Loading';

export interface IScreen {
  componentId: string;
  testID?: string;
}

export const Screens = new Map();

export const HOME = 'love-a-gamer.Home';
export const COUNTER = 'love-a-gamer.Counter';
export const LOADING = 'love-a-gamer.Loading';

Screens.set(HOME, Home);
Screens.set(COUNTER, Counter);
Screens.set(LOADING, Loading);

export const startApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'ROOT_STACK',
        children: [{
          component: { name: LOADING },
        }],
      },
    },
  });
};
