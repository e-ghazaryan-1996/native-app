import Header from "@/components/layout/Header";
import { useSession } from "@/hooks/useSession";
import { Redirect, Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { View } from "react-native";

const AuthLayout = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return (
      <Redirect
        // @ts-ignore
        href={{
          pathname: "/login",
        }}
      />
    );
  }

  return (
    <View className='flex-1'>
      <Header />
      <Slot />
      <StatusBar style='light' />
    </View>
  );
};

export default AuthLayout;
