import React from "react";
import { Example, Problem as ProblemType } from "../typings";
import CodeSpace from "./CodeSpace";
import Problem from "./Problem";

import { useState } from "react";

interface Props {
  problems: ProblemType[];
}

const Container = ({ problems }: Props) => {
  const [sidebar, SetSidebar] = useState(true);

  return (
    <div className="grid   grid-cols-6 bg-white   ">
      {/* <div className="absolute font-semibold p-1 justify-end ml-[135px] inline md:hidden cursor-pointer mt-2 rounded-full border border-black/40  items-center">
        <XMarkIcon onClick={() => SetSidebar(false)} className="h-3 w-3" />
      </div> */}
      <div className="col-span-2">
        {problems.map((problem) => (
          <Problem problem={problem} key={problem._id} />
        ))}
      </div>
      <div className="col-span-4">
        {problems.map((problem, i) => (
          <CodeSpace problem={problem} />
        ))}
      </div>
    </div>
  );
};

export default Container;
