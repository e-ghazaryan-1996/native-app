import { getCommentsUrl } from "@/config/api";
import { request } from "../api/request";
import { ICommentModel } from "./model";

export const CommentService = {
  async getComments(page = 1) {
    return request<ICommentModel[]>({
      url: getCommentsUrl("", { _page: page }),
      method: "GET",
    });
  },
  async getCommentDetail(id: string) {
    return request<ICommentModel>({
      url: getCommentsUrl(`/${id}`),
      method: "GET",
    });
  },
};
