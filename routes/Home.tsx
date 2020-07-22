import React, { FC } from "react";
import { Typography, Layout } from "antd";

import { Header } from "../components/Header";

const { Title } = Typography;

export const Home: FC = () => (
  <Layout className="layout">
    <Header />
    <Title level={2}>Home</Title>
  </Layout>
);
