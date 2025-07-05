import MapView from '@/components/MapView/MapView';
import { SafeAreaView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView />
    </SafeAreaView>
  );
}
