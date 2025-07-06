import { SafeAreaView } from 'react-native';
import { NaverMapView } from '@mj-studio/react-native-naver-map';
import { useEffect } from 'react';
import axios from 'axios';

const INIT_REGION = {
  latitude: 33.99611583543648,
  longitude: 125.83090197375878,
  latitudeDelta: 5.683935821120691,
  longitudeDelta: 4.11987292965938,
};

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.EXPO_PUBLIC_DATA_API_URL}/basedList?MobileOS=IOS&MobileApp=Camplog&serviceKey=${process.env.EXPO_PUBLIC_SERVICE_KEY}&_type=json`,
        );
        // console.log(res.data.response.body.items.item);
      } catch (e) {
        console.error('Fetch error:', e);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NaverMapView style={{ flex: 1 }} initialRegion={INIT_REGION} />
    </SafeAreaView>
  );
}
