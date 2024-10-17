import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "85vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const App = () => (
  <Carousel autoplay>
    <div className="mt-[5rem]">
      <h3 style={contentStyle}>1</h3>
    </div>
    <div className="mt-[5rem]">
      <h3 style={contentStyle}>2</h3>
    </div>
    <div className="mt-[5rem]">
      <h3 style={contentStyle}>3</h3>
    </div>
    <div className="mt-[5rem]">
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default App;
