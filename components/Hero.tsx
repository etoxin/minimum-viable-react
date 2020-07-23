import React, { FC } from "react";
import { useTheme } from "../hooks/useTheme";

interface Props {
  title: string;
  subTitle: string;
}

export default function Hero({ title, subTitle }): FC<Props> {
  const { secondary } = useTheme();
  return (
    <section className={`hero ${secondary}`}>
      <div className="hero-body">
        <p className="title">{title}</p>
        <p className="subtitle">{subTitle}</p>
      </div>
    </section>
  );
}
