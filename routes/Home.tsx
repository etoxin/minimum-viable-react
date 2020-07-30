import React, { FC } from "react";
import Hero from "../components/Hero";
import NewsItem, { NewsSkeleton } from "../components/NewsItem";
import { useNews } from "../hooks/useNews";

export default function Home(): FC {
  const { newsItems } = useNews();

  const NewsContent: FC = () => (
    <ol type="1">
      {newsItems.map((item) => (
        <NewsItem {...item} />
      ))}
    </ol>
  );

  return (
    <>
      <Hero
        title="Home"
        subTitle="Minimum Viable React is a boilerplate for React Hooks applications with Global State and Reducers. No need for Redux."
      />
      <div className="content pl-3">
        {newsItems.length > 0 ? <NewsContent /> : <NewsSkeleton />}
      </div>
    </>
  );
}
