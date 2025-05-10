import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function BookmarkScreen() {
  return (
    <SafeAreaView className="flex-1 bg-primary p-4">
      <View className="flex-row items-center justify-between">
        <FontAwesome name="chevron-down" size={25} color="#A6B7E5" />
        <Text className="font-MontSemiBold text-2xl font-semibold">Bookmarks</Text>
        <View />
      </View>
      <View className="mt-8">
        <View className="rounded-2xl border-2 bg-white p-4">
          <View className="flex-row items-center justify-between">
            <Avatar
              rounded
              icon={{ name: 'user', type: 'font-awesome' }}
              title="T"
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={{ backgroundColor: '#000' }}
            />
            <Ionicons name={'bookmark'} size={24} color="#A6B7E5" />
          </View>
          <View className="mt-1.5 px-1">
            <Text className="font-MontBold text-xl">Product Designer</Text>
            <View className="flex-row items-center gap-2">
              <Text className="font-MontMedium text-base text-gray-400">USA</Text>
              <Text className="font-MontMedium text-xl text-gray-400">|</Text>
              <Text className="font-MontMedium text-base text-gray-400">$120k - $133k</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
