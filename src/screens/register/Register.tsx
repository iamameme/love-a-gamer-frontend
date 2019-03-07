import * as React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { Navigation } from 'react-native-navigation';
import CodePush from 'react-native-code-push';

import { UIStore } from 'stores/UIStore';
import { codePushConfig } from 'utils/code-push';
import { IScreen, HOME } from 'screens';
import { Button } from 'components/button/Button';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const s = require('./Register.scss');
// TODO: IMPORTANT MAKE LOGIN ONLY FROM APP SOMEHOW SO PEOPLE CANT JUST BE SHOOTING REQUESTS AND SHIT MAYBE SOMETHING TO DO WITH CROSS ORIGIN
export type RegisterState = {
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  gender?: string;
  mobileNumber?: string;
};

@CodePush(codePushConfig())
@observer
export default class Register extends React.Component<IScreen, RegisterState> {
  constructor(props: IScreen) {
    super(props);
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Register',
        },
      },
    };
  }

  componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  updateRegisterForm = (newValue: any, key: string) => {
    this.setState({
      [key]: newValue
    });
  }

  validateForm = (form: RegisterState) => {
    // TODO: VALIDATION
    return true;
  }

  login = () => {
    const form = this.state;
    if (this.validateForm(form)) {
      // TODO: post

      // Navigate to home screen
      Navigation.push(this.props.componentId, {
        component: {
          name: HOME,
        },
      });
    } else {
      // validation didnt pass
    }
  }

  render() {
    return (
      <View testID="REGISTER_SCREEN">
        <View>
          <Text>This is where you like register.  would come here from a view thats like a signup</Text>
          <Button title={'?'} onPress={this.login}>Register Bitch</Button>
        </View>
        <View>
          <FormLabel>First Name</FormLabel>
          <FormInput onChangeText={(newValue: string) => this.updateRegisterForm(newValue, 'firstName')} />
          <FormValidationMessage>First Name is required :O</FormValidationMessage>

          <FormLabel>Last Name</FormLabel>
          <FormInput onChangeText={(newValue: string) => this.updateRegisterForm(newValue, 'lastName')} />
          <FormValidationMessage>Last Name is required :O</FormValidationMessage>

          <FormLabel>Username</FormLabel>
          <FormInput onChangeText={(newValue: string) => this.updateRegisterForm(newValue, 'username')} />
          <FormValidationMessage>Username is required :O</FormValidationMessage>

          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry={true}
            onChangeText={(newValue: string) => this.updateRegisterForm(newValue, 'password')}
          />
          <FormValidationMessage>Password is required :O</FormValidationMessage>

          <FormLabel>Gender</FormLabel>
          <FormInput onChangeText={(newValue: string) => this.updateRegisterForm(newValue, 'gender')} />
          <FormValidationMessage>First Name is required :O</FormValidationMessage>

          <FormLabel>Mobile Number</FormLabel>
          <FormInput onChangeText={(newValue: string) => this.updateRegisterForm(newValue, 'mobileNumber')} />
          <FormValidationMessage>Mobile Number is required :O</FormValidationMessage>

          <Button title={'?'} onPress={this.login}>REGISTER WOOOO</Button>
        </View>
      </View>
    );
  }
}
