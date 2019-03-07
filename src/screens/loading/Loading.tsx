import * as React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { Navigation } from 'react-native-navigation';
import CodePush from 'react-native-code-push';

import { UIStore } from 'stores/UIStore';
import { codePushConfig } from 'utils/code-push';
import { IScreen, HOME } from 'screens';
import { Button } from 'components/button/Button';

const s = require('./Loading.scss');

@CodePush(codePushConfig())
@observer
export default class Loading extends React.Component<IScreen> {

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Loading',
        },
      },
    };
  }

  componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  onCounterScreenPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: HOME,
      },
    });
  }

  render() {
    return (
      <View testID="LOADING_SCREEN">
        <View>
          <Text>Welcome to the Loading Screen</Text>
          <Button title={'?'} onPress={this.onCounterScreenPress}>GOTOHOME</Button>
        </View>
      </View>
    );
  }
}
