import { TLoginFormData } from "@/lib/validation/login-form";
import { UserService } from "@/services/user/service";
import { useMutation } from "@tanstack/react-query";

const useUserLogin = () => {
  return useMutation({
    mutationFn: async (data: TLoginFormData) =>
      await UserService.loginUser(data.email, data.password),
  });
};

export default useUserLogin;
