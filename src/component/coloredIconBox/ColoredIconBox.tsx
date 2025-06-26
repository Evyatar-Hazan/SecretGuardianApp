import type { ReactNode } from 'react';
import React, { useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { TouchableOpacity, View } from 'react-native';

import createStyles from './styles';

interface ColoredIconBoxProps {
  backgroundColor?: string;
  borderColor?: string;
  children: ReactNode;
  size?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const ColoredIconBox: React.FC<ColoredIconBoxProps> = ({
  backgroundColor = '#FF6868',
  borderColor = '#F5F5F5',
  children,
  size = 60,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const styles = createStyles(backgroundColor, borderColor, size, isPressed);

  const handlePressIn: (event: GestureResponderEvent) => void = (event) => {
    setIsPressed((val: boolean) => !val);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress || handlePressIn}
      style={styles.shadowWrapper}>
      <View style={styles.container}>{children}</View>
    </TouchableOpacity>
  );
};

export default ColoredIconBox;
