import { Image, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import GlobalButton from '../../component/button/button';
import Logo from '../../component/logo/logo';
import styles from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ScreenEnum } from '../../navigation';

const ShieldIcon = () => (
  <Svg
    width="29"
    height="34"
    viewBox="0 0 29 34"
    fill="none">
    <Path
      d="M26.4447 5.31243C21.4962 5.31243 17.7053 3.65487 14.4995 0C11.2941 3.65487 7.50329 5.31243 2.55523 5.31243C2.55523 14.8296 0.875481 28.4636 14.4995 34C28.1244 28.4635 26.4447 14.8296 26.4447 5.31243Z"
      fill="#399E91"
    />
  </Svg>
);

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.SecretGuardianSuccess
>;


const Success: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {
  const onNext = () => {
    navigation.navigate(ScreenEnum.SecretGuardianYoungGuardian);
  };
  return (
  <View style={styles().container}>
    <Logo />

    <View style={{ margin: 0 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <ShieldIcon />
      </View>
      <Text
        style={{
          fontSize: 28,
          fontWeight: '600',
          color: 'black',
          textAlign: 'center',
        }}>
        השומר הסודי מוכן!
      </Text>
      <Text
        style={{
          width: 300,
          fontSize: 16,
          fontWeight: '400',
          color: 'black',
          textAlign: 'center',
        }}>
        ההגדרות נשמרו אם הילד יבחר לתעד – הכול יישמר בצורה בטוחה ויועבר אליך
        בלבד.{' '}
      </Text>
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
        text="שמור"
        color="#FFC056"
        textColor="#EEEEF0"
        onPress={() => onNext()}
      />
    </View>
  </View>
);
}

export default Success;
