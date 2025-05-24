import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { router, Router, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import { options, url } from '~/lib/api';
import { JobListing } from '~/lib/interfaces/JobInterface';
export default function Home() {
  const router = useRouter();
  const [boomarkJobs, setBoomarkJobs] = useState<string[]>([]);
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.length > 0) {
        setJobs(result);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const toggleBookmark = (jobId: string) => {
    setBoomarkJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="rounded-bl-3xl bg-black px-6 py-8">
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="font-MontSemiBold text-4xl text-white">Jobinza</Text>
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
        <Text className="mt-8 font-MontMedium text-base text-white">Hi, John Doe 👋</Text>
        {/** Headline */}
        <View className="my-4">
          <Text className="font-MontBold text-4xl leading-normal text-white">
            Explore more then 10,000+ Jobs{' '}
          </Text>
        </View>
        {/** Buttons */}
        <View className="my-4 flex-row items-center">
          {/** Button 1 */}
          <View className="flex-row items-center justify-between gap-2 overflow-hidden rounded-full bg-primary px-4 py-2.5">
            <Text className="font-MontMedium text-sm">Ux Design</Text>
            <View className="items-center justify-center rounded-full bg-secondary px-4 ">
              <Text className="textc mt-1 font-MontMedium text-sm">158</Text>
            </View>
          </View>
          {/** Button 2 */}
          <View className="-ml-2 flex-row items-center justify-between gap-2 overflow-hidden rounded-full bg-primary px-4 py-2.5">
            <Text className="font-MontMedium text-sm">Marketing</Text>
            <View className="items-center justify-center rounded-full bg-secondary px-4 ">
              <Text className="mt-1 text-center font-MontMedium text-sm">158</Text>
            </View>
          </View>
          {/** Button 2 */}
          <TouchableOpacity className="-ml-2 h-12 w-12 flex-row items-center justify-center gap-2 overflow-hidden rounded-full bg-primary">
            <Octicons name="link-external" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-8 px-6">
        <Text className="font-MontSemiBold text-3xl">Jobs for you</Text>
        {/** Job Card */}
        <View className="mb-16 mt-4">
          {loading ? (
            <ActivityIndicator size="large" color="#A6B7E5" />
          ) : (
            <FlatList
              data={jobs}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <RenderItem
                  item={item}
                  isBookmarked={boomarkJobs.includes(item.id)}
                  onToggleBookmark={toggleBookmark}
                  router={router}
                />
              )}
              contentContainerStyle={{ paddingBottom: 300, gap: 10 }}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<View className="h-20" />}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
type RenderItemProps = {
  item: JobListing;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  router: Router;
};
export const RenderItem = ({ item, isBookmarked, onToggleBookmark }: RenderItemProps) => (
  <TouchableOpacity
    className="rounded-2xl border bg-white p-4"
    onPress={() => {
      router.push(`/job/${item.title}`);
    }}>
    <View className="flex-row items-center justify-between">
      <Avatar
        size="small"
        rounded
        title={item.title.charAt(0)}
        source={{ uri: `${item.organization_logo}` }}
        onPress={() => console.log('Avatar pressed!')}
        activeOpacity={1}
        titleStyle={{ fontSize: 20 }}
        containerStyle={{ backgroundColor: '#000' }}
      />
      <Ionicons
        name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
        size={24}
        color={`${isBookmarked ? '#A6B7E5' : 'black'}`}
        onPress={() => onToggleBookmark(item.id)}
      />
    </View>

    <View className="mt-1.5 px-1">
      <Text className="font-MontBold text-xl">{item.title}</Text>

      <View className="flex-row items-center gap-2">
        <Text className="font-MontMedium text-base text-gray-400">{item.locations_derived[0]}</Text>
        <Text className="font-MontMedium text-xl text-gray-400">|</Text>
      </View>
      <Text className="font-MontMedium text-base text-gray-400">
        {item.salary_raw?.currency} {item.salary_raw?.value.minValue}- {item.salary_raw?.currency}{' '}
        {item.salary_raw?.value.maxValue}
      </Text>

      {/* Skills / Categories */}
      {/* <View className="my-4 flex-row flex-wrap items-center gap-2">
        {item.skills.slice(0, 2).map((skill, index) => (
          <Pressable
            key={index}
            className="items-center justify-center rounded-full border-2 bg-primary px-6 py-1">
            <Text className="font-MontMedium text-base">{skill}</Text>
          </Pressable>
        ))}
      </View> */}
    </View>
  </TouchableOpacity>
);
