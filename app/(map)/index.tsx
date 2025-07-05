import { SafeAreaView } from 'react-native';
import { NaverMapView } from '@mj-studio/react-native-naver-map';
import { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://apis.data.go.kr/B551011/GoCamping/basedList?MobileOS=IOS&MobileApp=Camplog&serviceKey=${process.env.EXPO_PUBLIC_SERVICE_KEY}&_type=json`,
        );
        console.log(res.data.response.body.items.item);
      } catch (e) {
        console.error('Fetch error:', e);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NaverMapView style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
