import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 8,
          borderTopWidth: 2,
          borderColor: '#000',
          height: 60,
        },
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          tabBarActiveTintColor: '#000',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Feather name="compass" size={size} color={color} />,
          tabBarActiveTintColor: '#000',
        }}
      />
    </Tabs>
  );
}
