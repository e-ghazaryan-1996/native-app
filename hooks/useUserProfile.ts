import { UserService } from "@/services/user/service";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "./useSession";

const useUserProfile = () => {
  const { session: userId } = useSession();
  return useQuery({
    queryKey: ["user", userId],
    queryFn: async () => await UserService.getUserById(userId ?? ""),
    enabled: !!userId,
  });
};

export default useUserProfile;
