import { useSession } from "@/hooks/useSession";
import useUserProfile from "@/hooks/useUserProfile";
import { Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const Header = () => {
  const { signOut } = useSession();
  const { data } = useUserProfile();
  return (
    <View className='bg-gray-800 px-9 pt-14 pb-5 flex-row justify-between gap-3 items-center'>
      <Text className='text-white text-xl font-bold'>
        Welcome, {data?.name}!
      </Text>
      <TouchableOpacity
        className='bg-red-600 py-2 px-4 rounded'
        onPress={() => signOut()}
      >
        <Entypo name='log-out' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
