import { SafeAreaView, Text } from 'react-native';
import { NaverMapView } from '@mj-studio/react-native-naver-map';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NaverMapView style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
