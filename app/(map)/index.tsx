import { SafeAreaView, Text } from 'react-native';
import {
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';
import { useBasedListQuery } from '@/services/camping/camping.queries';

const INIT_REGION = {
  latitude: 33.99611583543648,
  longitude: 125.83090197375878,
  latitudeDelta: 5.683935821120691,
  longitudeDelta: 4.11987292965938,
};

export default function Home() {
  const { data } = useBasedListQuery({
    MobileOS: 'IOS',
    MobileApp: 'Camplog',
    serviceKey: decodeURIComponent(process.env.EXPO_PUBLIC_SERVICE_KEY || ''),
    _type: 'json',
  });

  const items = data?.response.body.items.item || [];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NaverMapView style={{ flex: 1 }} initialRegion={INIT_REGION}>
        {items.map((item, index) => (
          <NaverMapMarkerOverlay
            key={index}
            longitude={Number(item.mapX)}
            latitude={Number(item.mapY)}
          />
        ))}
      </NaverMapView>
    </SafeAreaView>
  );
}
