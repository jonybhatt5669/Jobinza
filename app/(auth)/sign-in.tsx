import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('email, password', email, password);
    router.push('/(main)/home');
  };
  return (
    <View className="flex-1 items-center px-12">
      <View className="mt-20">
        <Text className="text-center font-MontBold text-3xl">Login</Text>
        <Text className="text-center font-MontRegular text-xl">To your account</Text>
      </View>
      <View className="w-full  flex-1 justify-center gap-4">
        <View>
          <Text className="font-MontMedium">Email</Text>
          <TextInput
            placeholder="Enter your email"
            className="w-full rounded-lg border-2 bg-white px-4"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <Text className="font-MontMedium">Password</Text>
          <TextInput
            placeholder="Enter your password"
            className="w-full rounded-lg border-2 bg-white px-4"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <Pressable
        className="mb-20  w-full items-center justify-center rounded-lg border-2 bg-white px-8 py-3 "
        onPress={handleLogin}>
        <Text className="font-MontMedium text-xl font-medium">Log In</Text>
      </Pressable>
    </View>
  );
}
