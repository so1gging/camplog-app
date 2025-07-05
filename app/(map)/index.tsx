import { View } from 'react-native';
import { NaverMapView } from '@mj-studio/react-native-naver-map';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <NaverMapView style={{ flex: 1 }}></NaverMapView>
    </View>
  );
}
