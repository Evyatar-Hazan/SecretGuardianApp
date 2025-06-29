import { Text, View } from 'react-native';
import GlobalButton from '../../component/button/button';
import Logo from '../../component/logo/logo';
import styles from '../styles';
import UserSelectionStyles from './userSelectionStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ScreenEnum } from '../../navigation';
import React from 'react';
import ScreenWrapper from '../../component/screenWrapper';
import { useTranslation } from 'react-i18next';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.SecretGuardianUserSelection
>;

const UserSelection: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {
  const { t } = useTranslation();

  const onNext = () => {
    navigation.navigate(ScreenEnum.SecretGuardianEmail);
  };

  return (
    <ScreenWrapper>
      <View style={styles().container}>
        <Logo />

        <GlobalButton
          text={t('userSelection.parentLogin')}
          color="#0D4C55"
          textColor="#EEEEF0"
          onPress={onNext}
        />

        <Text style={UserSelectionStyles.text}>
          {t('userSelection.parentLoginMessage')}
        </Text>

        <GlobalButton
          text={t('userSelection.startDocumentation')}
          color="#FFC056"
          textColor="#2D4059"
          style={{ marginTop: '60%' }}
          onPress={() => {
            console.log('Starting documentation');
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default UserSelection;
