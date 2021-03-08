import React, { FC } from "react";
import Hero from "../components/Hero";
import NewsItem, { NewsSkeleton } from "../components/NewsItem";
import { useNews } from "../hooks/useNews";

export default function Home(): FC {
  const { data, isLoading } = useNews();

  const NewsContent = () =>
    data
      .slice(0, 30)
      .map((itemId) => <NewsItem key={`nc-${itemId}`} id={itemId} />);

  return (
    <>
      <Hero
        title="News"
        subTitle="Social news"
      />
      <div className="content pl-3">
        <ol type="1">{!isLoading ? <NewsContent /> : <NewsSkeleton />}</ol>
      </div>
    </>
  );
}
