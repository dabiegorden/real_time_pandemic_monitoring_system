import React from "react";
import { Carousel } from "antd";

import image1 from "@/app/public/assets/image-1.jpg";
import image2 from "@/app/public/assets/image-2.jpg";
import image3 from "@/app/public/assets/image-3.jpg";
import image4 from "@/app/public/assets/image-4.jpg";
import image5 from "@/app/public/assets/image-5.jpg";
import Image from "next/image";

const contentStyle = {
  height: "100vh",
  width: "100%",
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
      <div className="contents">
        <Image
          style={contentStyle}
          src={image1}
          width={""}
          height={""}
          alt="Home images"
          priority
        />
      </div>
    </div>
    <div className="mt-[5rem]">
      <Image
        style={contentStyle}
        src={image2}
        width={""}
        height={""}
        alt="Home images"
        priority
      />
    </div>
    <div className="mt-[5rem]">
      <Image
        style={contentStyle}
        src={image3}
        width={""}
        height={""}
        alt="Home images"
        priority
      />
    </div>
    <div className="mt-[5rem]">
      <Image
        style={contentStyle}
        src={image4}
        width={""}
        height={""}
        alt="Home images"
        priority
      />
    </div>
    <div className="mt-[5rem]">
      <Image
        style={contentStyle}
        src={image5}
        width={""}
        height={""}
        alt="Home images"
        priority
      />
    </div>
  </Carousel>
);
export default App;
