import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { uploadToDrive } from '../../utils/uploadToDrive';
import RNFS from 'react-native-fs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ScreenEnum } from '../../navigation';

const audioRecorderPlayer = new AudioRecorderPlayer();

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.SecretGuardianAudioRecorder
>;

const AudioRecorder: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {

  const [recording, setRecording] = useState(false);
  const audioPath = `${RNFS.DocumentDirectoryPath}/recorded_audio.mp4`;

  const startRecording = async () => {
    await audioRecorderPlayer.startRecorder(audioPath);
    setRecording(true);
  };

  const stopRecording = async () => {
    await audioRecorderPlayer.stopRecorder();
    setRecording(false);
    await uploadToDrive(audioPath, 'audio/mp4');
    Alert.alert('ההקלטה נשמרה ל-Drive');
  };

  return (
    <View style={styles.container}>
      <Button title={recording ? 'עצור 🎙️' : 'התחל הקלטה 🎙️'} onPress={recording ? stopRecording : startRecording} />
    </View>
  );
};

export default AudioRecorder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
