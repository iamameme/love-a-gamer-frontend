import { AsyncStorage } from 'react-native';
import { types, flow, applySnapshot, onSnapshot } from 'mobx-state-tree';

export const UserStore = types.model('User', {
  jwtToken: types.optional(types.string, ''),
})
  .actions(self => ({
    setToken(token?: string): void {
      if (token) {
        self.jwtToken = token;
      }
    },
  }))
  .create();

// Persist snapshots
onSnapshot(UserStore, (snapshot: object) => {
  AsyncStorage.setItem('User', JSON.stringify(snapshot));
});
