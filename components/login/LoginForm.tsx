import { Text, View, TextInput, TouchableOpacity } from "react-native";
import useYupValidationResolver from "@/hooks/useYupValidationResolver";
import { loginFormSchema, TLoginFormData } from "@/lib/validation/login-form";
import { useForm, Controller } from "react-hook-form";
import useUserLogin from "@/hooks/useUserLogin";
import { useSession } from "@/hooks/useSession";
import { useRouter } from "expo-router";

const LoginForm = () => {
  const resolver = useYupValidationResolver<TLoginFormData>(loginFormSchema);
  const { signIn } = useSession();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver,
    defaultValues: { email: "", password: "" },
  });
  const { mutateAsync } = useUserLogin();
  const router = useRouter();

  const onSubmit = async (data: TLoginFormData) => {
    const userRes = await mutateAsync(data);
    if (userRes) {
      signIn(`${userRes.id}`);
      router.push("/comments");
    }
  };
  return (
    <View className='flex-1 justify-center'>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder='Username'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className='mt-7 bg-white rounded-xl min-h-[62px] flex justify-center items-center pl-4'
          />
        )}
        name='email'
      />
      {errors.email && (
        <Text className='text-white font-bold mt-2'>
          {errors.email.message}
        </Text>
      )}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder='Password'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className='mt-7 bg-white rounded-xl min-h-[62px] flex justify-center items-center pl-4'
          />
        )}
        name='password'
      />
      {errors.password && (
        <Text className='text-white font-bold mt-2'>
          {errors.password.message}
        </Text>
      )}
      <TouchableOpacity
        className={`bg-white rounded-xl min-h-[62px] flex justify-center items-center mt-5`}
        activeOpacity={0.7}
        onPress={handleSubmit(onSubmit)}
      >
        <Text className={`font-semibold text-lg`}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
