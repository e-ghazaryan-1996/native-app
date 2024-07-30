import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";

export const getAccessToken = async () => {
  const accessToken = await getItemAsync("accessToken");
  return accessToken || null;
};

export const setAccessToken = async (accessToken: string) => {
  await setItemAsync("accessToken", accessToken);
};

export const removeAccessToken = async () => {
  await deleteItemAsync("accessToken");
};