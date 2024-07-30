import { ICommentModel } from "@/services/comments/model";
import { CommentService } from "@/services/comments/service";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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
