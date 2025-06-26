import { StyleSheet } from 'react-native';

const UserSelectionStyles = StyleSheet.create({
  row: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleText: {
    marginRight: 8,
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  image: {
    width: 105.439,
    height: 105.439,
    flexShrink: 0,
  },
  text: {
    width: 241,
    color: '#4A4A4A',
    textAlign: 'center',
    fontFamily: 'Assistant',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    textTransform: 'capitalize',
  },
});

export default UserSelectionStyles;
