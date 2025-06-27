import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useRef, useState } from 'react';
import {
  View,
  Alert,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import { RootStackParamList, ScreenEnum } from '../../navigation';
import EncryptedStorage from 'react-native-encrypted-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import RNFS from 'react-native-fs';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.SecretGuardianCamera
>;

const CameraComponent: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);
  const { hasPermission, requestPermission } = useCameraPermission();
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const takePhoto = async () => {
    try {
      if (camera.current) {
        const photo = await camera.current.takePhoto();
        const filePath = photo.path;
        setUploading(true);
        await uploadToDrive(filePath);
        Alert.alert('העלאה הושלמה', 'התמונה נשמרה בדרייב שלך');
      }
    } catch (err) {
      Alert.alert('שגיאה', 'אירעה שגיאה בזמן הצילום או ההעלאה');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const uploadToDrive = async (filePath: string) => {
    const fileName = filePath.split('/').pop() || 'image.jpg';
    const fileData = await RNFS.readFile(filePath, 'base64');
    const tokens = await GoogleSignin.getTokens();

    const metadata = {
      name: fileName,
      mimeType: 'image/jpeg',
    };

    const boundary = 'foo_bar_baz';
    const body =
      `--${boundary}\r\n` +
      'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
      JSON.stringify(metadata) + '\r\n' +
      `--${boundary}\r\n` +
      'Content-Type: image/jpeg\r\n' +
      'Content-Transfer-Encoding: base64\r\n\r\n' +
      fileData + '\r\n' +
      `--${boundary}--`;

    await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
        'Content-Type': `multipart/related; boundary=${boundary}`,
      },
      body,
    });
  };

  if (!device || !hasPermission) {
    return <View style={styles.loading}><ActivityIndicator size="large" color="#999" /></View>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        ref={camera}
        photo={true}
      />
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.button, uploading && styles.disabled]}
          onPress={takePhoto}
          disabled={uploading}
        >
          <Text style={styles.buttonText}>
            {uploading ? 'מעלה...' : 'צלם תמונה'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 40,
    elevation: 4,
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
