import React, { FC } from "react";
import Hero from "../components/Hero";

export default function Home(): FC {
  return (
    <Hero
      title="Home"
      subTitle="Minimum Viable React is a boilerplate for React Hooks applications with Global State and Reducers. No need for Redux."
    />
  );
}
