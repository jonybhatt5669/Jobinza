import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
export default function SignUp() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    router.replace('/(auth)/sign-in');
  };

  return (
    <View className="flex-1 items-center px-12">
      <View className="mt-20">
        <Text className="text-center font-MontMedium text-3xl">Create New</Text>
        <Text className="text-center font-MontMedium text-2xl"> Account</Text>
      </View>
      <View className="w-full  flex-1 justify-center gap-4">
        <View>
          <Text className="font-MontMedium">Username</Text>
          <TextInput
            placeholder="Enter your username"
            className="w-full rounded-lg border-2 bg-white px-4"
          />
        </View>
        <View>
          <Text className="font-MontMedium">Email</Text>
          <TextInput
            placeholder="Enter your email"
            className="w-full rounded-lg border-2 bg-white px-4"
          />
        </View>
        <View>
          <Text className="font-MontMedium">Password</Text>
          <TextInput
            placeholder="Enter your password"
            className="w-full rounded-lg border-2 bg-white px-4"
            secureTextEntry
          />
        </View>
      </View>
      <Pressable
        className="mb-20  w-full items-center justify-center rounded-lg border-2 bg-white px-8 py-3 "
        onPress={handleSignUp}>
        <Text className="font-MontMedium text-xl font-medium">Sign Up</Text>
      </Pressable>
    </View>
  );
}
