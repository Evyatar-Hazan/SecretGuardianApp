import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UserSelection from '../screens/userSelection';
import Email from '../screens/email';
import VerificationCode from '../screens/verificationCode';
import EvidenceType from '../screens/evidenceType';
import Success from '../screens/success';
import YoungGuardian from '../screens/youngGuardian';
import CameraComponent from '../screens/camera';
import AudioRecorder from '../screens/audioRecorder';



export type RootStackParamList = {
  SecretGuardianLogin: undefined;
  SecretGuardianUserSelection: undefined;
  SecretGuardianEmail: undefined;
  SecretGuardianVerificationCode: undefined;
  SecretGuardianEvidenceType: undefined;
  SecretGuardianSuccess: undefined;
  SecretGuardianYoungGuardian: undefined;
  SecretGuardianCamera: undefined;
  SecretGuardianAudioRecorder: undefined;
};

export enum ScreenEnum {
  SecretGuardianLogin = 'SecretGuardianLogin',
  SecretGuardianUserSelection = 'SecretGuardianUserSelection',
  SecretGuardianEmail = 'SecretGuardianEmail',
  SecretGuardianVerificationCode = 'SecretGuardianVerificationCode',
  SecretGuardianEvidenceType = 'SecretGuardianEvidenceType',
  SecretGuardianSuccess = 'SecretGuardianSuccess',
  SecretGuardianYoungGuardian = 'SecretGuardianYoungGuardian',
  SecretGuardianCamera = 'SecretGuardianCamera',
  SecretGuardianAudioRecorder = 'SecretGuardianAudioRecorder',
}

const Stack = createStackNavigator<RootStackParamList>();
const SecretGuardianNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={ScreenEnum.SecretGuardianUserSelection} screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name={ScreenEnum.SecretGuardianLogin} component={Login} /> */}
      <Stack.Screen name={ScreenEnum.SecretGuardianUserSelection} component={UserSelection} />
      <Stack.Screen name={ScreenEnum.SecretGuardianEmail} component={Email} />
      <Stack.Screen name={ScreenEnum.SecretGuardianVerificationCode} component={VerificationCode} />
       <Stack.Screen name={ScreenEnum.SecretGuardianEvidenceType} component={EvidenceType} />
      <Stack.Screen name={ScreenEnum.SecretGuardianSuccess} component={Success} />
      <Stack.Screen name={ScreenEnum.SecretGuardianYoungGuardian} component={YoungGuardian} />
      <Stack.Screen name={ScreenEnum.SecretGuardianCamera} component={CameraComponent} />
      <Stack.Screen name={ScreenEnum.SecretGuardianAudioRecorder} component={AudioRecorder} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SecretGuardianNavigation;
