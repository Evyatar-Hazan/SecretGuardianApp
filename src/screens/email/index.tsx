import React, { useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import GlobalButton from '../../component/button/button';
import Logo from '../../component/logo/logo';
import styles from '../styles';
import UserSelectionStyles from '../userSelection/userSelectionStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ScreenEnum } from '../../navigation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import EncryptedStorage from 'react-native-encrypted-storage';
import GoogleLogo from '../../assets/svg/GoogleLogo';


type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.SecretGuardianEmail
>;

const Email: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {

  // אתחול הגדרות Google Signin
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '23851303614-dhksd3kh0sjl51lmuf1gsieb10lhoj8o.apps.googleusercontent.com',
      scopes: ['https://www.googleapis.com/auth/drive.file'],
      offlineAccess: true,
    });
  }, []);

  const onNext = async () => {
    try {
      console.log('Attempting to sign in with Google...');
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
      const tokens = await GoogleSignin.getTokens();
      console.log('Tokens:', tokens);

      if ('refreshToken' in tokens && tokens.refreshToken) {
        EncryptedStorage.setItem('refresh_token', String(tokens.refreshToken));
      }

      if (userInfo.data && userInfo.data.user && userInfo.data.user.email) {
        await EncryptedStorage.setItem('user_email', userInfo.data.user.email);
      } else {
        throw new Error('User data or email is missing.');
      }

      navigation.navigate(ScreenEnum.SecretGuardianEvidenceType);
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('ההתחברות נכשלה. נסה/י שוב.', (error as Error).toString());
    }
  };

  return (
    <View style={styles().container}>
      <Logo />
      <GlobalButton
        text="התחבר/י באמצעות חשבון גוגל"
        textStyle={{ fontSize: 16 }}
        color="white"
        textColor="#2D4059"
        onPress={onNext}
        Icon={<GoogleLogo />}
      />
      <Text style={UserSelectionStyles.text}>הכול נשמר במקום בטוח</Text>
    </View>
  );
};

export default Email;
