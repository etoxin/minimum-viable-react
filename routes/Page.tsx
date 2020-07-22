import React, { FC } from "react";
import { useTheme } from "../hooks/useTheme";
export const Page: FC = () => {
  const { secondary } = useTheme();
  return (
    <section className={`hero ${secondary}`}>
      <div className="hero-body">
        <p className="title">Page</p>
        <p className="subtitle">
          Everything you need to <strong>create a website</strong> with React
        </p>
      </div>
    </section>
  );
};
