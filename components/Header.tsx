import React, { FC } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

export const Header: FC = () => (
  <Layout.Header>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/page">Page</Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
);
