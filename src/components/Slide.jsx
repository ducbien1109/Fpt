import React from "react";
import { Carousel } from "antd";

const Slide = () => {
  const contentStyle: React.CSSProperties = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    display:'flex',
    justifyContent:'center'
  };
  
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img
          src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2023/11/24/638364223247226370_desk-header.png"
          width={1000}
        />
      </div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}><img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/11/8/638350483316181374_F-H1_800x300.png"/></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/11/23/638363464513934548_F-H1_800x300.png"/></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/11/1/638344358547514006_F-H1_800x300.png"/></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/11/23/638363291655482634_F-H1_800x300.png"/></h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Slide;
