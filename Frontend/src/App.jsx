import React from "react";
import AllRoutes from "./routes/AllRoutes";
import { Layout } from "antd";

const { Content } = Layout;

const App = () => {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#f7f7f7",
  };

  return (
    <div style={appStyle}>
      <Layout>
        <Content >
          <AllRoutes />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
