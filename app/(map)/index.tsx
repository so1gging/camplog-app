import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const HTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' />
    <style>
      html, body, #map {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
      }
    </style>
    <script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.EXPO_PUBLIC_NCP_KEY_ID}"></script>
</head>
<body>
  <div id="map"></div>
  <script>
    var mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    };
    var map = new naver.maps.Map('map', mapOptions);
  </script>
</body>
</html>
`;

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ html: HTML, baseUrl: 'http://localhost:8081' }}
        style={{ flex: 1 }}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
      />
    </SafeAreaView>
  );
}
