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
