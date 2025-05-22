import { View, Text, Pressable } from 'react-native';
import { Avatar } from 'react-native-elements';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-background">
      <View className="relative h-36 items-center justify-center bg-secondary">
        <Text className="font-MontSemiBold text-3xl">Profile</Text>
        <View className="absolute -bottom-8 left-0 right-0 items-center justify-center">
          <Avatar
            rounded
            size={60}
            icon={{ name: 'user', type: 'font-awesome' }}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
            containerStyle={{ backgroundColor: '#000', borderWidth: 3, borderColor: '#F2E6F7' }}
          />
        </View>
      </View>
      <View className="ml-4 mt-10 w-full flex-row items-center justify-center gap-2">
        <View className="items-center justify-center gap-1">
          <Text className="text-center font-MontMedium text-lg">John Doe</Text>
          <Text className="font-MontRegular text-sm text-gray-400">johndoe@gmail.com</Text>
        </View>
        <Pressable>
          <FontAwesome5 name="pen" size={24} color="black" />
        </Pressable>
      </View>
      <View className=" flex-1 justify-center gap-4 px-4">
        {/** My Cv */}
        <Pressable className="flex-row items-center justify-between rounded-lg bg-accent p-4">
          <View className="flex-row items-center gap-2">
            <AntDesign name="profile" size={24} color="white" />
            <Text className="font-MontRegular text-lg text-white">My cv</Text>
          </View>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>

        {/** Privacy Security */}
        <Pressable className="flex-row items-center justify-between rounded-lg bg-accent p-4">
          <View className="flex-row items-center gap-2">
            <AntDesign name="profile" size={24} color="white" />
            <Text className="font-MontRegular text-lg text-white">Privacy & Security policy</Text>
          </View>
          <AntDesign name="right" size={24} color="white" />
        </Pressable>
      </View>

      <Pressable className="mx-4 mb-4 items-center rounded-2xl border-2 bg-white p-4">
        <Text className="font-MontMedium text-lg">Sign Out</Text>
      </Pressable>
    </View>
  );
}
