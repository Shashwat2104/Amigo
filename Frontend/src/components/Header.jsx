import React from "react";
import { Button, Col, Layout, Row } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderCom = () => {
  const navbarStyle = {
    backgroundColor: "#007bff",
    padding: "10px 0",
  };

  const logoStyle = {
    fontSize: "34px",
    color: "white",
    fontWeight: "bold",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };

  const buttonStyle = {
    background: "#FF6B6B",
    color: "white",
    border: "none",
    margin: "0 10px",
    fontWeight: "bold",
    padding: "8px 16px",
    fontSize: "20px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const responsiveButtonStyle = {
    fontSize: "14px",
    padding: "6px 12px",
  };

  return (
    <Header style={navbarStyle}>
      <Row justify="space-between" align="middle">
        <Col xs={24} sm={24} md={12}>
          <div style={logoStyle}>Google Map App</div>
        </Col>

        <Col xs={24} sm={24} md={12} style={buttonContainerStyle}>
          <Button style={{ ...buttonStyle, ...responsiveButtonStyle }}>
            <Link to="/register" style={{ color: "white" }}>
              Register
            </Link>
          </Button>
          <Button style={{ ...buttonStyle, ...responsiveButtonStyle }}>
            <Link to="/login" style={{ color: "white" }}>
              Login
            </Link>
          </Button>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderCom;
