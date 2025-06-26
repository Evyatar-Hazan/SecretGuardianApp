import { Text, View } from 'react-native';

import GlobalButton from '../../component/button/button';
import Logo from '../../component/logo/logo';
import styles from '../styles';
import UserSelectionStyles from './userSelectionStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ScreenEnum } from '../../navigation';
import React from 'react';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.SecretGuardianUserSelection
>;


const UserSelection: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {
  const onNext = () => {
    navigation.navigate(ScreenEnum.SecretGuardianEmail);
  };

  return (
    <View style={styles().container}>
      <Logo />

      <GlobalButton
        text="כניסת הורה"
        color="#0D4C55"
        textColor="#EEEEF0"
        onPress={onNext}
      />

      <Text style={UserSelectionStyles.text}>
        יש לבצע תחילה כניסת הורה והתחברות עבור אחסון בדרייב
      </Text>

      <GlobalButton
        text="התחל תיעוד"
        color="#FFC056"
        textColor="#2D4059"
        style={{ marginTop: '60%' }}
        onPress={() => {
          console.log('Starting documentation');
        }}
      />
    </View>
  );
};

export default UserSelection;
