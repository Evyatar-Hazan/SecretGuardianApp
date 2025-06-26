import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useRef } from 'react';
import { Button, View } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import { RootStackParamList, ScreenEnum } from '../../navigation';

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.SecretGuardianCamera
>;


const CameraComponent: React.FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {  
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const takePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto();
      console.log(photo);
    }
  };

  if (!device || !hasPermission) {
    return <View />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        device={device}
        isActive={true}
        ref={camera}
        photo={true}
      />
      <Button title="צלם תמונה" onPress={takePhoto} />
    </View>
  );
};

export default CameraComponent;
