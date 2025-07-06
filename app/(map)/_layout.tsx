import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { SafeAreaView, Text } from 'react-native';

export default function MapLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{ title: 'map' }}
        drawerContent={({ navigation }) => {
          return (
            <SafeAreaView>
              <Text>Drawer</Text>
            </SafeAreaView>
          );
        }}
      />
    </GestureHandlerRootView>
  );
}
