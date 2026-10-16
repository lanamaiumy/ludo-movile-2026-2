import { Stack } from 'expo-router';

export default function ChildLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="journey" options={{ title: 'Trilha de sons' }} />
      <Stack.Screen
        name="exercise/[scenarioId]"
        options={{ title: 'Exercício', animation: 'slide_from_bottom' }}
      />
    </Stack>
  );
}

// aqui, o _layout não sobrescreve o _layout do app, apenas adiciona 
// novas regras para o _layout das página de (child) por exemplo

