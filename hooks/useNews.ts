import { useQuery } from "react-query";

export const useNews = () => {
  const { isLoading, data } = useQuery(
    "topstories",
    () =>
      fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      ).then((resp) => resp.json()),
    {
      refetchInterval: 10000,
    }
  );

  return {
    isLoading,
    data,
  };
};
