import axios from "axios";
import { Button, Form } from "antd";
import React, { useState } from "react";

const MapData = () => {
  const [formData, setFormData] = useState({
    locationname: "",
    address: "",
    lat: "",
    lng: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFinish = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4500/locations",
        formData
      ); 
      console.log("Response from backend:", response.data);
    } catch (error) {
      console.log("Error:", error.response.data);
    }
  };

  const formStyle = {
    maxWidth: "400px", 
    margin: "0 auto", 
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    transition: "border-color 0.2s",
  };

  const buttonStyle = {
    width: "100%",
    background: "#007bff", 
    color: "white",
    border: "none",
    padding: "2px",
    borderRadius: "4px",
    fontSize: "22px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  const buttonHoverStyle = {
      background: "#0056b3", 
     
  };

  return (
    <div style={formStyle}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Location Name:" name="locationname">
          <input
            style={inputStyle}
            type="text"
            name="locationname"
            placeholder="Enter Your Location Name"
            value={formData.locationname}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Address:" name="address">
          <input
            style={inputStyle}
            type="text"
            name="address"
            placeholder="Enter Your Address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Latitude:" name="lat">
          <input
            style={inputStyle}
            type="text"
            name="lat"
            placeholder="Enter Your Latitude"
            value={formData.lat}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Longitude:" name="lng">
          <input
            style={inputStyle}
            type="text"
            name="lng"
            placeholder="Enter Your Longitude"
            value={formData.lng}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ ...buttonStyle, ...buttonHoverStyle }}
            htmlType="submit"
            type="primary"
          >
            Add Your Location
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MapData;
