import { useEffect } from "react";
import { useAppContext } from "./useAppContext";

export const useNews = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const newsItems = async () => {
      const newsIDs = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      ).then((r) => r.json());

      const news = await Promise.all(
        newsIDs
          .slice(0, 30)
          .map((id) =>
            fetch(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            ).then((r) => r.json())
          )
      );
      dispatch({ type: "SET_NEWS_ITEMS", newsItems: news });
    };

    if (state.newsItems && state.newsItems.length === 0) {
      newsItems();
    }
  }, []);

  return {
    newsItems: state.newsItems,
  };
};
