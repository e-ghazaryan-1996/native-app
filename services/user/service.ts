import { getUsersUrl } from "@/config/api";
import { IUserModel } from "./model";
import { request } from "../api/request";
import Toast from "react-native-toast-message";

export const UserService = {
  async loginUser(email: string, password: string) {
    console.log(email, password, "adsssssssss");
    const dbemail = "user@gmail.com";
    const dbpassword = "12345678";
    if (email === dbemail && password === dbpassword) {
      return request<IUserModel>({
        url: getUsersUrl(`/1`),
        method: "GET",
      });
    }
    Toast.show({
      type: "error",
      text1: "Login error",
      text2: "Invalid email or password",
    });
  },
  async getUserById(id: string) {
    return request<IUserModel>({
      url: getUsersUrl(`/${id}`),
      method: "GET",
    });
  },
};
