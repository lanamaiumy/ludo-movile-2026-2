import { Stack } from 'expo-router';
import useAuth from '../../src/states/useAuth';

export default function ParentLayout() {
  const isLoggedIn = useAuth((state) => state.token !== null);
  const hasHydrated = useAuth((state) => state.hasHydrated);

  if (!hasHydrated) {
    return null;
  }

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
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ title: 'Entrar' }} />
        <Stack.Screen name="register" options={{ title: 'Criar conta' }} />
      </Stack.Protected>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="children" options={{ title: 'Crianças' }} />
        <Stack.Screen name="child-form" options={{ title: 'Criança', presentation: 'modal' }} />
        <Stack.Screen name="settings" options={{ title: 'Configurações' }} />
      </Stack.Protected>
    </Stack>
  );
}
