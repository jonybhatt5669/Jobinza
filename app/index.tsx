import { Link, Redirect } from 'expo-router';
import { useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function OnboardingScreen() {
  const [steps, setSteps] = useState(0);

  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Redirect href="/(main)/home" />;
  }

  const handleNext = () => {
    if (steps >= 2) {
      setSteps(0);
    } else {
      setSteps((prev) => prev + 1);
    }
  };
  const titleBgOne = require('../assets/images/titleBg.png');
  const titleBgTwo = require('../assets/images/titleBgOne.png');
  const titleBgThree = require('../assets/images/titleBgTwo.png');
  return (
    <View
      className={`${steps === 0 ? 'bg-accent-alternate' : steps === 1 ? 'bg-secondary' : 'bg-[#FCF0C4]'} flex-1 px-8 `}>
      <View className="flex-1 items-center justify-center">
        {steps === 0 && (
          <View>
            <ImageBackground source={titleBgOne} resizeMode="cover" className="py-4">
              <Text className="text-center  font-Risque text-5xl">Welcome</Text>
            </ImageBackground>
            <Text className="mt-2 text-center font-Risque text-6xl">To Jobinza</Text>
          </View>
        )}
        {steps === 1 && (
          <View className="font-Risque">
            <Text className="text-center font-Risque text-5xl">Find</Text>
            <ImageBackground source={titleBgTwo} resizeMode="cover" className="mt-3.5 py-3 pr-5">
              <Text className=" font-Risque text-5xl ">Your Career</Text>
            </ImageBackground>
          </View>
        )}
        {steps === 2 && (
          <View>
            <ImageBackground source={titleBgThree} resizeMode="cover" className="mt-3.5 py-3 pr-5">
              <Text className=" font-Risque text-5xl ">Let's Start</Text>
            </ImageBackground>
            <Text className="mt-2 text-center font-Risque text-4xl">Your Journey</Text>
          </View>
        )}
      </View>
      <View>
        {steps === 2 ? (
          <View>
            <Link href="/(auth)/sign-in" asChild>
              <Pressable className=" w-full items-center justify-center rounded-lg border-2 bg-secondary px-8 py-3 ">
                <Text className="font-MontMedium text-xl font-medium">Sign In</Text>
              </Pressable>
            </Link>
            <Link href="/(auth)/sign-up" asChild>
              <Pressable
                className="my-16 w-full items-center justify-center rounded-lg border-2 bg-white px-8 py-3 "
                style={style.buttonShadow}>
                <Text className="font-MontMedium text-xl font-medium">Sign Up</Text>
              </Pressable>
            </Link>
          </View>
        ) : (
          <>
            <TouchableOpacity
              onPress={handleNext}
              className="my-16 w-full items-center justify-center rounded-lg border-2 bg-white px-8 py-3 ">
              <Text className="font-MontMedium text-xl font-medium">Next</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  buttonShadow: {},
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '900', // Extra bold text // Raw, sans-serif font
    textAlign: 'center',
    letterSpacing: -1, // Tight letter spacing for a "crude" look
  },
});
