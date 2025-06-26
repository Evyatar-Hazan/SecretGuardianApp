import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    gap: 30,
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    color: '#EEEEF0',
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24 /* 120% */,
    letterSpacing: 0.15,
    textTransform: 'capitalize',
  },
});

export default styles;
