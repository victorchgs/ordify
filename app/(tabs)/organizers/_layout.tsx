import { Stack } from "expo-router";

export default function OrganizersLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Organizadores" }} />
      <Stack.Screen
        name="createOrganizers"
        options={{ title: "Criar Organizador" }}
      />
      <Stack.Screen
        name="organizersInfo"
        options={{ title: "Informações do Organizador" }}
      />
    </Stack>
  );
}
