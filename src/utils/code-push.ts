import { Platform } from 'react-native';
import CodePush, { CodePushOptions } from 'react-native-code-push';

import { UIStore } from 'stores/UIStore';
import { config } from 'config';

export function codePushConfig(): CodePushOptions {
  const result = {
    checkFrequency: CodePush.CheckFrequency.ON_APP_START,
    installMode: CodePush.InstallMode.ON_NEXT_RESTART,
  } as CodePushOptions;

  if (Platform.OS === 'ios' && UIStore.isBeta) {
    result.deploymentKey = config.IOS_CODEPUSH_DEPLOYMENT_KEY_STAGING;
    result.installMode = CodePush.InstallMode.IMMEDIATE;
    result.updateDialog = true as any;
  }

  if (Platform.OS === 'android' && UIStore.isBeta) {
    result.deploymentKey = config.ANDROID_CODEPUSH_DEPLOYMENT_KEY_STAGING;
    result.installMode = CodePush.InstallMode.IMMEDIATE;
    result.updateDialog = true as any;
  }

  return result;
}
