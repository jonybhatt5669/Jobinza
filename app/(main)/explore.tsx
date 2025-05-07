import { Entypo } from '@expo/vector-icons';
import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';

import { renderItem } from './home';

import { JobMock } from '~/lib/mock-data/job-mock';
export default function Explore() {
  return (
    <View className="flex-1 bg-background">
      {/** hero */}
      <View className="rounded-bl-3xl bg-black px-6 py-8">
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="font-MontBold text-4xl text-white">Explore</Text>
          <View className="flex-row items-center gap-16">
            <Entypo name="notification" size={24} color="white" />
            <Avatar
              size="small"
              rounded
              title="J"
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
            />
          </View>
        </View>
        {/** Search Bar */}
        <View className="mt-8 w-full items-center justify-center">
          <View className="w-full flex-row justify-between  rounded-xl bg-background px-4 py-2">
            {/** Input Box */}
            <View className="flex-row items-center ">
              <Entypo name="magnifying-glass" size={25} color="#ccc" />
              <TextInput placeholder="Search for jobs, company" placeholderTextColor="#ccc" />
            </View>
            <Pressable className="size-11 items-center justify-center rounded-full bg-secondary">
              <Entypo name="sound-mix" size={20} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
      {/** Top Company Card */}
      <View className="mt-8 px-6">
        <Text className="font-MontSemiBold text-3xl">Recommended Job</Text>
        {/** Job Card */}
        <View className="mb-16 mt-4">
          <FlatList
            data={JobMock}
            keyExtractor={(item) => item.jobId}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 300, gap: 10 }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View className="h-20" />}
          />
        </View>
      </View>
    </View>
  );
}
