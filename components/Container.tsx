import React from "react";
import { Example, Problem as ProblemType } from "../typings";
import CodeSpace from "./CodeSpace";
import Problem from "./Problem";
import { useState } from "react";
interface Props {
  problems: ProblemType[];
}

const Container = ({ problems }: Props) => {
  return (
    <div className="grid  grid-cols-6 bg-white  ">
      {problems.map((problem) => (
        <Problem problem={problem} key={problem._id} />
      ))}
      <CodeSpace />
    </div>
  );
};

export default Container;
