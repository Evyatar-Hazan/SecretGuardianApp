import React, { useRef, useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { uploadToDrive } from '../../utils/uploadToDrive';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ScreenEnum } from '../../navigation';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.SecretGuardianCamera
>;

const CameraScreen: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {

  const camera = useRef<Camera>(null);
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  const takePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto();
      await uploadToDrive(photo.path, 'image/jpeg');
      Alert.alert('תמונה נשמרה ל-Drive');
    }
  };

  const toggleVideo = async () => {
    if (!camera.current) return;
    if (recording) {
      const video = await camera.current.stopRecording();
      await uploadToDrive(video.path, 'video/mp4');
      Alert.alert('וידאו נשמר ל-Drive');
      setRecording(false);
    } else {
      setRecording(true);
      camera.current.startRecording({
        flash: 'off',
        onRecordingFinished: async (video) => {
          await uploadToDrive(video.path, 'video/mp4');
          Alert.alert('וידאו נשמר ל-Drive');
        },
        onRecordingError: (err) => {
          Alert.alert('שגיאה בהקלטת וידאו', err.message);
          setRecording(false);
        },
      });
    }
  };

  if (!device || !hasPermission) return <View />;

  return (
    <View style={styles.container}>
      <Camera ref={camera} device={device} isActive={true} style={StyleSheet.absoluteFill} video={true} photo={true} />
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.text}>📸</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, recording && styles.recording]} onPress={toggleVideo}>
          <Text style={styles.text}>{recording ? '⏹️' : '🎥'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  controls: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 20,
  },
  recording: {
    backgroundColor: '#f00',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
