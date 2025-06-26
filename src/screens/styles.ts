import { StyleSheet } from 'react-native';

const styles = () =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'red',
    },
    container: {
      flex: 1,
      backgroundColor: '#F8F9FA',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '30%',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 40,
      color: '#333',
    },
    button: {
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
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },
    googleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#DDD',
      marginVertical: 10,
      width: '80%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    googleLogo: {
      width: 24,
      height: 24,
      marginRight: 12,
    },
    googleButtonText: {
      color: '#000',
      fontSize: 16,
      fontWeight: '500',
    },
  });

export default styles;
