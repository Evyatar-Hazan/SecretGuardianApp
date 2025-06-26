import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

const createStyles = (
  backgroundColor: string,
  borderColor: string,
  size: number,
  isPressed: boolean,
) =>
  StyleSheet.create({
    shadowWrapper: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: isPressed ? 4 : 2 },
      shadowOpacity: isPressed ? 0.3 : 0.1,
      shadowRadius: isPressed ? 8 : 4,
      elevation: isPressed ? 6 : 2,
      borderRadius: 12,
    },
    container: {
      display: 'flex',
      width: size,
      height: size,
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      borderWidth: isPressed ? 3 : 0,
      borderColor: isPressed ? 'black' : borderColor,
      backgroundColor,
    } as ViewStyle,
  });

export default createStyles;
