import React, { FC } from "react";

import { Hero } from "../components/Hero";

export const Home: FC = () => {
  return (
    <React.Fragment>
      <Hero
        title="Home"
        subTitle="Minimum Viable React is a boilerplate for React Hooks applications with Global State and Reducers. No need for Redux."
      />
    </React.Fragment>
  );
};
