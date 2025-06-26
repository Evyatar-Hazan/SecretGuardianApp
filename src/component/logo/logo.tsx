import type { ImageSourcePropType } from 'react-native';
import { Image, Text } from 'react-native';

import secretGuardianImage from '../../assets/secretGuardianImage.jpeg';
import styles from './styles';

const Logo = () => (
  <>
    <Image
      style={styles.image}
      source={secretGuardianImage as ImageSourcePropType}
    />
    <Text style={styles.title}>Secret Guardian</Text>
  </>
);

export default Logo;
