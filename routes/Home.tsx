import React, { FC } from "react";

import { useTheme } from "../hooks/useTheme";

export const Home: FC = () => {
  const { secondary } = useTheme();
  return (
    <React.Fragment>
      <section className={`hero ${secondary}`}>
        <div className="hero-body">
          <p className="title">Home</p>
          <p className="subtitle">
            Minimum Viable React is a boilerplate for React Hooks applications.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};
