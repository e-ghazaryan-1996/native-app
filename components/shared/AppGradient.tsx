import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

interface IAppGradientProps {
  children: React.ReactNode;
  colors: string[];
}

const AppGradient: React.FC<IAppGradientProps> = ({ children, colors }) => {
  return (
    <LinearGradient colors={colors} className='flex-1'>
      <SafeAreaView className='flex-1 px-5'>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
