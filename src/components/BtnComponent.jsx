import React from "react";
import { Button } from "antd";
const BtnComponent = (prop) => {
    const {color, handleClick, name} = prop;
  return (
    <div>
      <Button type={color} onClick={handleClick} danger>
        {name}
      </Button>
    </div>
  );
};

export default BtnComponent;
