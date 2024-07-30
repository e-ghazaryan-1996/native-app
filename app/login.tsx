import { ImageBackground, Text, View } from "react-native";
import React from "react";
import AppGradient from "@/components/shared/AppGradient";
import { StatusBar } from "expo-status-bar";
import LoginForm from "@/components/login/LoginForm";
import beachImage from "@/assets/images/beach.webp";

const Login = () => {
  return (
    <View className='flex-1'>
      <ImageBackground
        source={beachImage}
        resizeMode='cover'
        className='flex-1 justify-center'
      >
        <AppGradient colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.4)"]}>
          <View className='flex-1 justify-center'>
            <LoginForm />
          </View>
          <StatusBar style='light' />
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Login;
