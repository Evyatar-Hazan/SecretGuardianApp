import React, { useEffect, useState } from 'react';
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
  ScreenEnum.SecretGuardianYoungGuardian
>;

type ItemType = 'image' | 'audio' | 'video';

const YoungGuardian: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {
  const { t } = useTranslation();
  const [availableTypes, setAvailableTypes] = useState<ItemType[] | null>(null);

  useEffect(() => {
    const loadSelectedTypes = async () => {
      try {
        const saved = await AsyncStorage.getItem('evidenceType');
        if (saved) {
          const parsed: string[] = JSON.parse(saved);
          const filtered = parsed.filter((item) =>
            ['image', 'audio', 'video'].includes(item)
          ) as ItemType[];
          console.log('Filtered types:', filtered);
          if (filtered.length === 0) {
            setAvailableTypes(null);
          }
          else {
            setAvailableTypes(filtered);
          }
        } else {
          setAvailableTypes(null);
        }
      } catch (error) {
        console.error('Error loading evidence types:', error);
        setAvailableTypes(null);
      }
    };

    loadSelectedTypes();
  }, []);

  const onNext = (item: ItemType) => {
    switch (item) {
      case 'image':
        navigation.navigate(ScreenEnum.SecretGuardianCamera);
        break;
      case 'audio':
        navigation.navigate(ScreenEnum.SecretGuardianAudioRecorder);
        break;
      case 'video':
        navigation.navigate(ScreenEnum.SecretGuardianCamera);
        break;
    }
  };

  const renderButton = (type: ItemType) => {
    switch (type) {
      case 'image':
        return (
          <ColoredIconBox
            key="image"
            onPress={() => onNext('image')}
            backgroundColor="#FF6868">
            <ImageIcon />
          </ColoredIconBox>
        );
      case 'audio':
        return (
          <ColoredIconBox
            key="audio"
            onPress={() => onNext('audio')}
            backgroundColor="#FFC056">
            <AudioIcon />
          </ColoredIconBox>
        );
      case 'video':
        return (
          <ColoredIconBox
            key="video"
            onPress={() => onNext('video')}
            backgroundColor="#399E91">
            <CameraIcon />
          </ColoredIconBox>
        );
    }
  };

  const typesToRender: ItemType[] = availableTypes ?? ['image', 'audio', 'video'];

  return (
    <ScreenWrapper>
    <View style={styles().container}>
      <Logo />

      <View style={{ margin: 0 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '600',
            color: 'black',
            textAlign: 'center',
          }}>
          {t('youngGuardian.title')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: 'black',
            textAlign: 'center',
          }}>
          {t('youngGuardian.question')}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 50,
          }}>
          {typesToRender.map(renderButton)}
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
        <Text>{t('youngGuardian.secretMessage')}</Text>
        <GlobalButton
          textStyle={{ fontSize: 26 }}
          text={t('youngGuardian.activate')}
          color="#0D4C55"
          textColor="#EEEEF0"
          onPress={() => {
            // כאן הפעולה שתרצה להפעיל
          }}
        />
      </View>
    </View>
    </ScreenWrapper>
  );
};

export default YoungGuardian;
