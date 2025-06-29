import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import UserSelection from '../screens/userSelection';
import Email from '../screens/email';
import EvidenceType from '../screens/evidenceType';
import Success from '../screens/success';
import YoungGuardian from '../screens/youngGuardian';
import CameraComponent from '../screens/camera';
import AudioRecorder from '../screens/audioRecorder';
import CustomDrawerContent from '../component/customDrawerContent';

export type RootStackParamList = {
  SecretGuardianUserSelection: undefined;
  SecretGuardianEmail: undefined;
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
  SecretGuardianEvidenceType = 'SecretGuardianEvidenceType',
  SecretGuardianSuccess = 'SecretGuardianSuccess',
  SecretGuardianYoungGuardian = 'SecretGuardianYoungGuardian',
  SecretGuardianCamera = 'SecretGuardianCamera',
  SecretGuardianAudioRecorder = 'SecretGuardianAudioRecorder',
}

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const SecretGuardianStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SecretGuardianUserSelection" component={UserSelection} />
    <Stack.Screen name="SecretGuardianEmail" component={Email} />
    <Stack.Screen name="SecretGuardianEvidenceType" component={EvidenceType} />
    <Stack.Screen name="SecretGuardianSuccess" component={Success} />
    <Stack.Screen name="SecretGuardianYoungGuardian" component={YoungGuardian} />
    <Stack.Screen name="SecretGuardianCamera" component={CameraComponent} />
    <Stack.Screen name="SecretGuardianAudioRecorder" component={AudioRecorder} />
  </Stack.Navigator>
);

const SecretGuardianNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Main" 
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Main"
          component={SecretGuardianStack}
          options={{ title: 'ראשי' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default SecretGuardianNavigation;
