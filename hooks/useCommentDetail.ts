import { CommentService } from "@/services/comments/service";
import { useQuery } from "@tanstack/react-query";

const useCommentDetail = (id: string) => {
  return useQuery({
    queryKey: ["commentDetail", id],
    queryFn: async () => await CommentService.getCommentDetail(id),
    enabled: !!id,
  });
};

export default useCommentDetail;
