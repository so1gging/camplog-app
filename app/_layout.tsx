import { Stack } from 'expo-router';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/services/queryClient';

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(map)" />
      </Stack>
    </QueryClientProvider>
  );
}
