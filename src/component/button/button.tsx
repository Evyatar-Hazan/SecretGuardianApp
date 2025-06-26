import type { TextStyle, ViewStyle } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import React from 'react';

type GlobalButtonProps = {
  text: string; // טקסט הכפתור
  color: string; // צבע רקע
//   onPress: () => void;
  textColor?: string; // ברירת מחדל: לבן
  style?: ViewStyle; // אפשרות להוסיף סטייל חיצוני
  textStyle?: TextStyle;
  Icon?: React.ReactNode; // אפשרות להוסיף אייקון
  onPress: () => void;
};

const GlobalButton: React.FC<GlobalButtonProps> = ({
  text,
  color,
  onPress,
  textColor = '#FFFFFF',
  style,
  textStyle,
  Icon,
}) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: color }, style]}
    onPress={() => onPress()}
    accessibilityRole="button"
    accessibilityLabel={text}>
    <Text style={[styles.text, { color: textColor }, textStyle]}>{text}</Text>
    {Icon && <React.Fragment>{Icon}</React.Fragment>}
  </TouchableOpacity>
);

export default GlobalButton;
