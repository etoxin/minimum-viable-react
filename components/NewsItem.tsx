import React, { FC } from "react";
import { useQuery } from "react-query";
import {
  format,
  formatDistance,
  formatRelative,
  subDays,
  fromUnixTime,
} from "date-fns";

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

  return [...Array(30)].map((k, i) => (
    <div key={`k${i}`}>
      <span style={title} />
      <span style={subtitle} />
    </div>
  ));
}

export default function NewsItem({ id }): FC {
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
    return <NewsSkeleton />;
  }

  return (
    <li key={`n${id}`}>
      <a href={data?.url}>
        {data?.title}{" "}
        <span className="is-size-7">({data?.url?.split("/")[2]})</span>
      </a>
      <p className="is-size-7">
        {data?.score} points by {data?.by}.{" "}
        <span className="is-size-7">
          {formatDistance(fromUnixTime(data?.time), new Date(), {
            addSuffix: true,
          })}
        </span>
      </p>
    </li>
  );
}
