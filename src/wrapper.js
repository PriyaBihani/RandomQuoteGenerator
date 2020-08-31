import React from "react";

const Wrapper = (props) => {
  return <Wrapper value={{ home: "hi" }}>{props.children}</Wrapper>;
};

export default Wrapper;
