import { CommentService } from "@/services/comments/service";
import { useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 10;

const useComments = () => {
  const query = useInfiniteQuery({
    queryKey: ["comments"],
    queryFn: async ({ pageParam }) =>
      await CommentService.getComments(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const hasMore = lastPage.length === PAGE_SIZE;
      return hasMore ? allPages.length + 1 : undefined;
    },
  });

  return query;
};

export default useComments;
