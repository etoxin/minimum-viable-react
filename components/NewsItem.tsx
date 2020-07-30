import React, { FC } from "react";
import { NewsItem } from "../defs";

export default function NewsItem({ title, url, score, by }): FC<NewsItem> {
  return (
    <li>
      <a href={url}>{title}</a>
      <p className="is-size-7">
        {score} points by {by}.
      </p>
    </li>
  );
}

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
