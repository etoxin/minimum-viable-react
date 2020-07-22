import React, { FC } from "react";
import { useTheme } from "../hooks/useTheme";
export const ChangeTheme: FC = () => {
  const { secondary, changeTheme, isTheme } = useTheme();
  return (
    <React.Fragment>
      <section className={`hero ${secondary}`}>
        <div className="hero-body">
          <p className="title">Change the Theme</p>
          <p className="subtitle">You can change the theme of the app here.</p>
        </div>
      </section>

      <section className="section">
        <div className="buttons has-addons">
          <button
            className={`button ${isTheme("dark") ? "is-dark is-selected" : ""}`}
            onClick={() => changeTheme("dark")}
          >
            Dark
          </button>
          <button
            className={`button ${
              isTheme("light") ? "is-light is-selected" : ""
            }`}
            onClick={() => changeTheme("light")}
          >
            Light
          </button>
          <button
            className={`button ${isTheme("blue") ? "is-link is-selected" : ""}`}
            onClick={() => changeTheme("blue")}
          >
            Blue
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};
