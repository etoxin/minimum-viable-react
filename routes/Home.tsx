import React, { FC } from "react";
import Hero from "../components/Hero";
import NewsItem, { NewsSkeleton } from "../components/NewsItem";
import { useNews } from "../hooks/useNews";

export default function Home(): FC {
  const { data, isLoading } = useNews();

  const NewsContent = () =>
    data.slice(0, 30).map((itemId) => <NewsItem id={itemId} />);

  return (
    <>
      <Hero
        title="Home"
        subTitle="Minimum Viable React is a boilerplate for React Hooks applications with Global State and Reducers. No need for Redux."
      />
      <div className="content pl-3">
        <ol type="1">{!isLoading ? <NewsContent /> : <NewsSkeleton />}</ol>
      </div>
    </>
  );
}
