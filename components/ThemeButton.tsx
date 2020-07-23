import React, { FC } from "react";
import { useTheme } from "../hooks/useTheme";
interface Props {
  theme: "dark" | "light" | "blue";
}
export function ThemeButton({ theme }): FC<Props> {
  const { primary, changeTheme, isTheme } = useTheme();
  const css = isTheme(theme) ? primary + " is-selected" : "";
  return (
    <button
      style={{ textTransform: "capitalize" }}
      className={`button ${css}`}
      onClick={() => changeTheme(theme)}
    >
      {theme}
    </button>
  );
}
