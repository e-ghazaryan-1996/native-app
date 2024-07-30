export const API_URL = "https://jsonplaceholder.typicode.com/";

interface IGetCommentsParams {
  _page?: number;
  _limit?: number;
  [key: string]: any;
}

export const getCommentsUrl = (url = "", params?: IGetCommentsParams) => {
  const baseUrl = `/comments${url}`;
  const queryParams = params
    ? new URLSearchParams(
        Object.entries(params).filter(([_, v]) => v !== undefined)
      ).toString()
    : "";
  return queryParams ? `${baseUrl}?${queryParams}` : baseUrl;
};
export const getUsersUrl = (url?: string) => `/users${url ? url : ""}`;
