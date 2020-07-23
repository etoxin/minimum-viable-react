import React, { FC } from "react";
import Hero from "../components/Hero";
import { ThemeButton } from "../components/ThemeButton";

export default function ChangeTheme(): FC {
  return (
    <>
      <Hero
        title="Change the Theme"
        subTitle="You can change the theme of the app here."
      />
      <section className="section">
        <div className="buttons has-addons">
          <ThemeButton theme="dark" />
          <ThemeButton theme="light" />
          <ThemeButton theme="blue" />
        </div>
      </section>
    </>
  );
}
