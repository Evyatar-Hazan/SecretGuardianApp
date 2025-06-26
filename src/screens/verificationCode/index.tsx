import { Text, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

import Logo from '../../component/logo/logo';
import styles from '../styles';
import UserSelectionStyles from '../userSelection/userSelectionStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ScreenEnum } from '../../navigation';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.SecretGuardianVerificationCode
>;


const VerificationCode: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {
  const onNext = () => {
   navigation.navigate(ScreenEnum.SecretGuardianEvidenceType);
  };

  return(
  <View style={styles().container}>
    <Logo />

    <Text style={UserSelectionStyles.text}>קוד אימות</Text>
    <OtpInput
      numberOfDigits={6}
      onTextChange={(text) => console.log(text)}
      onFilled={(text) => onNext()}
    />
  </View>
);
};

export default VerificationCode;
