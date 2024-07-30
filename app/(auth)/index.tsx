import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const HomePage = () => {
  return (
    <View className='flex-1'>
      <View className='flex-1 justify-center items-center'>
        <TouchableOpacity
          className='min-h-[29]'
          onPress={() => router.push("/comments")}
        >
          <Text className='text-red-600 text-xl font-bold'>Comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
