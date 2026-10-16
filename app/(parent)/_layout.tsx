import { Stack } from 'expo-router';

export default function ParentLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#D6E9FF' },
        headerTintColor: '#2E6FB7',
        headerTitleStyle: { fontFamily: 'PlusJakartaSans_700Bold' },
        headerShadowVisible: false,
        headerBackButtonDisplayMode: 'minimal',
        contentStyle: { backgroundColor: '#EAF4FF' },
      }}
    >
      <Stack.Screen name="login" options={{ title: 'Entrar' }} />
      <Stack.Screen name="register" options={{ title: 'Criar conta' }} />
      <Stack.Screen name="children" options={{ title: 'Crianças' }} />
      <Stack.Screen name="child-form" options={{ title: 'Criança', presentation: 'modal' }} />
      <Stack.Screen name="settings" options={{ title: 'Configurações' }} />
    </Stack>
  );
}
