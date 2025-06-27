import {
  Text,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import GlobalButton from '../../component/button/button';
import ColoredIconBox from '../../component/coloredIconBox/ColoredIconBox';
import Logo from '../../component/logo/logo';
import styles from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ScreenEnum } from '../../navigation';

const ImageIcon = () => (
  <Svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none">
    <Path
      d="M19.3334 5.33334H12.6667L9.33341 9.33334H5.33341C4.62617 9.33334 3.94789 9.61429 3.4478 10.1144C2.9477 10.6145 2.66675 11.2928 2.66675 12V24C2.66675 24.7073 2.9477 25.3855 3.4478 25.8856C3.94789 26.3857 4.62617 26.6667 5.33341 26.6667H26.6667C27.374 26.6667 28.0523 26.3857 28.5524 25.8856C29.0525 25.3855 29.3334 24.7073 29.3334 24V12C29.3334 11.2928 29.0525 10.6145 28.5524 10.1144C28.0523 9.61429 27.374 9.33334 26.6667 9.33334H22.6667L19.3334 5.33334Z"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 21.3333C18.2091 21.3333 20 19.5425 20 17.3333C20 15.1242 18.2091 13.3333 16 13.3333C13.7909 13.3333 12 15.1242 12 17.3333C12 19.5425 13.7909 21.3333 16 21.3333Z"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AudioIcon = () => (
  <Svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none">
    <Path
      d="M16 2.66666C14.9391 2.66666 13.9217 3.08808 13.1716 3.83823C12.4214 4.58838 12 5.60579 12 6.66666V16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20C17.0609 20 18.0783 19.5786 18.8284 18.8284C19.5786 18.0783 20 17.0609 20 16V6.66666C20 5.60579 19.5786 4.58838 18.8284 3.83823C18.0783 3.08808 17.0609 2.66666 16 2.66666Z"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M25.3334 13.3333V16C25.3334 18.4754 24.3501 20.8493 22.5997 22.5997C20.8494 24.35 18.4754 25.3333 16.0001 25.3333C13.5247 25.3333 11.1508 24.35 9.40042 22.5997C7.65008 20.8493 6.66675 18.4754 6.66675 16V13.3333"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M16 25.3333V29.3333"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const CameraIcon = () => (
  <Svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none">
    <Path
      d="M21.3333 17.3333L28.2973 21.976C28.3976 22.0428 28.5143 22.0811 28.6347 22.0869C28.7552 22.0927 28.8749 22.0656 28.9813 22.0087C29.0876 21.9518 29.1764 21.8671 29.2384 21.7637C29.3004 21.6602 29.3332 21.5419 29.3333 21.4213V10.4933C29.3333 10.376 29.3024 10.2608 29.2436 10.1593C29.1849 10.0577 29.1004 9.9735 28.9987 9.91507C28.897 9.85664 28.7816 9.82608 28.6643 9.82648C28.547 9.82688 28.4319 9.85822 28.3306 9.91734L21.3333 14"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M18.6667 8H5.33341C3.86066 8 2.66675 9.19391 2.66675 10.6667V21.3333C2.66675 22.8061 3.86066 24 5.33341 24H18.6667C20.1395 24 21.3334 22.8061 21.3334 21.3333V10.6667C21.3334 9.19391 20.1395 8 18.6667 8Z"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.SecretGuardianYoungGuardian
>;

type ItemType = 'image' | 'audio' | 'video';

const YoungGuardian: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {

  const onNext = (item: ItemType) => {
   navigation.navigate(ScreenEnum.SecretGuardianCamera);
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
      default:
        console.warn('Unknown item type');
    }
  };

  return(
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
        השומר הסודי הצעיר{' '}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '400',
          color: 'black',
          textAlign: 'center',
        }}>
        איזה סוג תוכן תרצה לתעד?
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 50,
        }}>
        <ColoredIconBox onPress={() => onNext("image")} backgroundColor="#FF6868">
          <ImageIcon />
        </ColoredIconBox>
        <ColoredIconBox onPress={() => onNext("audio")} backgroundColor="#FFC056">
          <AudioIcon />
        </ColoredIconBox>
        <ColoredIconBox onPress={() => onNext("video")} backgroundColor="#399E91">
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
      <Text>שלח תיעוד סודי</Text>
      <GlobalButton
        textStyle={{ fontSize: 26 }}
        text="הפעל"
        color="#0D4C55"
        textColor="#EEEEF0"
        onPress={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </View>
  </View>
);
}

export default YoungGuardian;
