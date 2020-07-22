import React, { FC } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "../hooks/useTheme";

export const Header: FC = () => {
  const { primary } = useTheme();

  return (
    <nav className={`navbar ${primary}`}>
      <div className="navbar-brand">
        <a
          className="navbar-item"
          href="https://github.com/etoxin/minimum-viable-react"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt=""
            height="20"
            width="20"
          />
          <strong>&nbsp;MVR</strong>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/change-theme" className="navbar-item">
            Change Theme
          </Link>
        </div>
      </div>
    </nav>
  );
};
