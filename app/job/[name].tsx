import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Animated, { FadeIn } from 'react-native-reanimated';

import { options, url } from '~/lib/api';
import { JobListing } from '~/lib/interfaces/JobInterface';
export default function JobDetails() {
  const [job, setJob] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const baseUrl = `${url}?title_filter=${name}`;
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(baseUrl, options);
      const result = await response.json();
      if (result.length > 0) {
        setJob(result);
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
  }, [name]);

  function formatNumber(num: any) {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  }

  return (
    <Animated.View className="flex-1 justify-center  bg-background" entering={FadeIn.duration(300)}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <>
          {job.map((j) => (
            <React.Fragment key={j.id}>
              <View className="relative h-36 bg-secondary" key={j.id}>
                <View className="flex-row items-center justify-between p-4">
                  <View className="size-10 items-center justify-center rounded-full border-2 bg-white">
                    <AntDesign
                      name="arrowleft"
                      color="#000"
                      size={20}
                      onPress={() => router.back()}
                    />
                  </View>
                  <Ionicons
                    name="bookmark-outline"
                    size={24}
                    color={`${'black'}`}
                    // onPress={() => onToggleBookmark(item.id)}
                  />
                </View>
                <View className="absolute -bottom-8 left-0 right-0 items-center justify-center">
                  <Avatar
                    rounded
                    size={60}
                    icon={{ name: 'user', type: 'font-awesome' }}
                    onPress={() => console.log('Works!')}
                    activeOpacity={0.7}
                    containerStyle={{
                      borderWidth: 3,
                      borderColor: '#F2E6F7',
                      backgroundColor: '#F2E6F7',
                    }}
                    source={{ uri: `${j.organization_logo}` }}
                  />
                </View>
              </View>
              <View className=" mt-10 w-full flex-row items-center justify-center gap-2">
                <View className="items-center justify-center gap-1">
                  <Text className="text-center font-MontMedium text-lg">{j.title}</Text>
                  <Pressable onPress={() => Linking.openURL(j.organization_url)}>
                    <Text className="font-MontExtraBlack text-lg">{j.organization}</Text>
                  </Pressable>
                  <View className="flex-row items-center gap-1">
                    <Entypo name="location-pin" size={20} color="#9ca3af" />
                    <Text className="font-MontMedium text-base text-gray-400">
                      {j.locations_derived[0]}
                    </Text>
                  </View>
                </View>
              </View>

              <View className="mt-6 flex-1 justify-center px-4">
                <View className="mb-4 flex-row items-center justify-center gap-4 ">
                  {/** Salary Card */}
                  <View className="w-48 max-w-full flex-row items-center gap-2 rounded-xl border bg-white p-3">
                    <View className="size-12 items-center justify-center rounded-full bg-gray-50">
                      <FontAwesome name="money" size={20} color="black" />
                    </View>
                    <View className="items-start gap-1">
                      <Text className="font-MontRegular text-sm text-gray-500">Salary</Text>
                      <Text className="font-MontSemiBold text-base">
                        {' '}
                        ${formatNumber(j.salary_raw?.value.minValue)} - $
                        {formatNumber(j.salary_raw?.value.maxValue)}
                      </Text>
                    </View>
                  </View>
                  {/** Job Type */}
                  <View className="w-48 flex-row items-center gap-2 rounded-xl border bg-white p-3">
                    <View className="size-12 items-center justify-center rounded-full bg-gray-50">
                      <FontAwesome name="briefcase" size={20} color="black" />
                    </View>
                    <View className="items-start gap-1">
                      <Text className="font-MontRegular text-sm text-gray-500">Job Type</Text>
                      <Text className="font-MontSemiBold text-base">{j.employment_type}</Text>
                    </View>
                  </View>
                </View>

                <View className="flex-row items-center justify-center gap-4 ">
                  {/** Working Model */}
                  <View className="w-48 flex-row items-center gap-2 rounded-xl border bg-white p-3">
                    <View className="size-12 items-center justify-center rounded-full bg-gray-50">
                      <AntDesign name="calculator" size={20} color="black" />
                    </View>
                    <View className="items-start gap-1">
                      <Text className="font-MontRegular text-sm text-gray-500">Working Model</Text>
                      <Text className="font-MontSemiBold text-base">
                        {`${j.remote_derived ? 'Remote' : 'Onsite'}`}
                      </Text>
                    </View>
                  </View>
                  {/** Job Type */}
                  <View className="w-48 flex-row items-center gap-2 rounded-xl border bg-white p-3">
                    <View className="size-12 items-center justify-center rounded-full bg-gray-50">
                      <Ionicons name="bar-chart-outline" size={20} color="black" />
                    </View>
                    <View className="items-start gap-1">
                      <Text className="font-MontRegular text-sm text-gray-500">Level</Text>
                      <Text className="font-MontSemiBold text-base">Intern Ship</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full items-center justify-center px-10 pb-6">
                <Pressable className="w-full items-center rounded-lg border-2 bg-white p-4">
                  <Text className="font-MontMedium text-lg">Apply</Text>
                </Pressable>
              </View>
            </React.Fragment>
          ))}
        </>
      )}
    </Animated.View>
  );
}

/**
 * Job Type --> employee type
 * remote_derived --> false -> onsite
 *
 */
