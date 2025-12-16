// import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
export function CameraCapture({
  onCapture,
  styles,
}: {
  onCapture: (uri: string) => void;
  styles?: any;
}) {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>('back');

  const ref = useRef<CameraView>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission?.granted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>
          We need your permission to use the camera
        </Text>
        <Button title='Grant Permission' onPress={requestPermission} />
      </View>
    );
  }

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    if (photo?.uri) {
      onCapture(photo.uri);
    }
  };

  const toggleFacing = () => {
    setFacing((prev) => (prev === 'back' ? 'front' : 'back'));
  };

  return (
    <View style={styles?.container}>
      <View style={styles?.cameraContainer}>
        <CameraView
          ref={ref}
          facing={facing}
          responsiveOrientationWhenOrientationLocked
          style={styles?.camera}
        >
          <View>
            <Pressable onPress={toggleFacing}>
              {/* <AntDesign name='picture' size={32} color='white' /> */}
              <Feather name='video' size={32} color='white' />
            </Pressable>
            <Pressable onPress={takePicture}>
              <Text>Take Picture</Text>
            </Pressable>
          </View>
        </CameraView>
      </View>
    </View>
  );
}
