import React from "react";
import CodeSpace from "./CodeSpace";
import Problem from "./Problem";

const Container = () => {
  return (
    <div className="grid grid-cols-6 bg-white  ">
      <Problem />
      <CodeSpace />
    </div>
  );
};

export default Container;
