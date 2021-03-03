import React, { FC } from "react";
import { useQuery } from "react-query";

export function NewsSkeleton(): FC {
  const title = {
    background: "rgb(236, 236, 236)",
    display: "block",
    height: "1.3em",
    width: "30em",
    margin: ".75em 1.5em .25em 1.5em",
  };
  const subtitle = {
    background: "rgb(236, 236, 236)",
    display: "block",
    height: ".75em",
    width: "7em",
    margin: "0 1.5em .75em 1.5em",
  };

  return [...Array(30)].map(() => (
    <div>
      <span style={title} />
      <span style={subtitle} />
    </div>
  ));
}

export default function NewsItem({ id }): FC<string> {
  const { data, isLoading } = useQuery(
    ["news-item", id],
    () =>
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      ).then((resp) => resp.json()),
    {
      refetchInterval: 10000,
    }
  );

  if (isLoading) {
    return <NewsSkeleton key={id} />;
  }

  return (
    <li key={id}>
      <a href={data?.url}>{data?.title}</a>
      <p className="is-size-7">
        {data?.score} points by {data?.by}.
      </p>
    </li>
  );
}
