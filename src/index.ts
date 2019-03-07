// tslint:disable origin-ordered-imports no-import-side-effect
import './utils/setup';

import { Navigation } from 'react-native-navigation';
import makeInspectable from 'mobx-devtools-mst';

import { updateTheme } from 'utils/theme';
import { Screens, startApp } from 'screens';
import { UIStore } from 'stores/UIStore';
import { CounterStore } from 'stores/CounterStore';
import { UserStore } from 'stores/UserStore';

// Register screens
Screens.forEach((ScreenComponent, key) => Navigation.registerComponent(key, () => ScreenComponent));

// Make inspectable
if (__DEV__) {
  makeInspectable(UIStore);
  makeInspectable(CounterStore);
  makeInspectable(UserStore);
}

// Start application
Navigation.events().registerAppLaunchedListener(async () => {
  await UIStore.hydrate();
  await updateTheme();

  startApp();
});
