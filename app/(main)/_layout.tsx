import { Tabs } from 'expo-router';
export default function MainLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
