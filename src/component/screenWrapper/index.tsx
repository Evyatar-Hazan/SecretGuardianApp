import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import HamburgerMenuIcon from '../../assets/svg/HamburgerMenuIcon';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <HamburgerMenuIcon />
      </TouchableOpacity>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1000,
  },
});

export default ScreenWrapper;
