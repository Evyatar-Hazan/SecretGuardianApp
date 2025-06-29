import React from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GlobalButton from '../../component/button/button';
import ColoredIconBox from '../../component/coloredIconBox/ColoredIconBox';
import Logo from '../../component/logo/logo';
import styles from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ScreenEnum } from '../../navigation';
import ImageIcon from '../../assets/svg/ImageIcon';
import AudioIcon from '../../assets/svg/AudioIcon';
import CameraIcon from '../../assets/svg/CameraIcon';
import { useTranslation } from 'react-i18next';
import ScreenWrapper from '../../component/screenWrapper';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.SecretGuardianEvidenceType
>;

const EvidenceType: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) => {
      if (prev.includes(type)) {
        return prev.filter((item) => item !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  const onNext = async () => {
    try {
      if (selectedTypes.length > 0) {
        await AsyncStorage.setItem('evidenceType', JSON.stringify(selectedTypes));
      }
      navigation.navigate(ScreenEnum.SecretGuardianSuccess);
    } catch (error) {
      console.error('Error saving evidence type:', error);
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles().container}>
        <Logo />
        <View style={{ flex: 1, margin: 0, justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
            }}>
            {t('evidenceType.parentLogin')}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: 'black' }}>
            {t('evidenceType.childDocumentationQuestion')}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <ColoredIconBox
              backgroundColor="#FF6868"
              selected={selectedTypes.includes('image')}
              onPress={() => toggleType('image')}>
              <ImageIcon />
            </ColoredIconBox>
            <ColoredIconBox
              backgroundColor="#FFC056"
              selected={selectedTypes.includes('audio')}
              onPress={() => toggleType('audio')}>
              <AudioIcon />
            </ColoredIconBox>
            <ColoredIconBox
              backgroundColor="#399E91"
              selected={selectedTypes.includes('video')}
              onPress={() => toggleType('video')}>
              <CameraIcon />
            </ColoredIconBox>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 50,
            flexDirection: 'column',
          }}>
          <GlobalButton
            textStyle={{ fontSize: 26 }}
            text={t('evidenceType.save')}
            color="#0D4C55"
            textColor="#EEEEF0"
            onPress={onNext}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};


export default EvidenceType;
