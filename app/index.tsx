import { CameraCapture } from '@/components/CameraView';
import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function App() {
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {!photoUri ? (
        <CameraCapture onCapture={setPhotoUri} styles={camera} />
      ) : (
        <Image source={{ uri: photoUri }} style={styles.preview} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  preview: {
    flex: 1,
    resizeMode: 'contain',
  },
});
const camera = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: StyleSheet.absoluteFillObject,
  camera: StyleSheet.absoluteFillObject,
  shutterContainer: {
    position: 'absolute',
    bottom: 44,
    left: 0,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  shutterBtn: {
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: 'white',
    width: 85,
    height: 85,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterBtnInner: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
