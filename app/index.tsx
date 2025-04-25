import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
export default function OnboardingScreen() {
  const [steps, setSteps] = useState(0);
  const handleNext = () => {
    if (steps >= 2) {
      setSteps(0);
    } else {
      setSteps((prev) => prev + 1);
    }
  };
  return (
    <View
      className={`${steps === 0 ? 'bg-accent-alternate' : steps === 1 ? 'bg-secondary' : 'bg-[#FCF0C4]'} flex-1 px-8 `}>
      <View className="flex-1 items-center justify-center">
        {steps === 0 && (
          <View>
            <View className="bg-primary px-8 py-4">
              <Text className="text-4xl font-bold">Welcome</Text>
            </View>
            <Text className="mt-2 text-center text-4xl">To Jobinza</Text>
          </View>
        )}
        {steps === 1 && (
          <View>
            <Text className=" text-center text-4xl">Find</Text>
            <View className="bg-primary mt-2 px-8 py-4">
              <Text className=" text-4xl font-bold">Your Career</Text>
            </View>
          </View>
        )}
        {steps === 2 && (
          <View>
            <View className="bg-accent-alternate px-8 py-4">
              <Text className="text-4xl font-bold">Let's Start</Text>
            </View>
            <Text className="mt-2 text-center text-4xl">Your Journey</Text>
          </View>
        )}
      </View>
      <View>
        {steps === 2 ? (
          <View>
            <Pressable
              className="bg-secondary  w-full items-center justify-center rounded-full border px-8 py-3 "
              style={style.buttonShadow}>
              <Text className="text-xl font-medium">Sign In</Text>
            </Pressable>
            <Pressable
              className="bg-primary mb-16 mt-8 w-full items-center justify-center rounded-full border px-8 py-3 "
              style={style.buttonShadow}>
              <Text className="text-xl font-medium">Sign Up</Text>
            </Pressable>
          </View>
        ) : (
          <>
            <Pressable
              onPress={handleNext}
              className="bg-primary my-16 w-full items-center justify-center rounded-full border px-8 py-3 "
              style={style.buttonShadow}>
              <Text className="text-xl font-medium">Next</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  buttonShadow: {
    elevation: 15,
    shadowColor: '#000000',
    shadowOpacity: 1,
  },
});
