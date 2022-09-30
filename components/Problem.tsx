import { HeartIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Example, Problem as ProblemType } from "../typings";
import { XMarkIcon } from "@heroicons/react/24/outline";
interface Props {
  problem: ProblemType;
}

const Problem = ({ problem }: Props) => {
  const [show, setShow] = useState(false);
  const [sidebar, SetSidebar] = useState(true);

  const active = "col-span-2   bg-transparent border border-r   p-5";
  const normal = "col-span-2 hidden   bg-transparent border border-r   p-5";
  return (
    <div className={sidebar ? active : normal}>
      {/* Header */}

      <div className="flex md:inline items-center justify-center">
        <h1 className="md:font-medium font-light ">{problem.title}</h1>
        <div className="flex items-center gap-5 p-3">
          <p className="text-green-700 hidden md:inline font-medium">
            {problem.difficulty}
          </p>
          <HeartIcon className="h-4 w-4" />
          <XMarkIcon
            onClick={() => SetSidebar(false)}
            className="h-4 absolute mx-6 -my-7 md:hidden border rounded-full border-black/50 w-4"
          />
        </div>
      </div>
      <div className="border-b border-black/10" />
      {/* Description */}
      <div className="p-1 md:p-5 md:border-none border-b border-black/10">
        <p className="text-sm">{problem.question}</p>
      </div>

      {/* Example */}
      <div className="space-y-5">
        <div>
          <p className="font-bold text">Example 1:</p>
        </div>
        {problem.example.map((examples) => (
          <div className="bg-gray-100/70 p-3 md:p-5">
            <h2 className="font-semibold text-sm">
              Input:{" "}
              <span className="text-sm font-normal">{examples.input1}</span>
            </h2>
            <h2 className="font-semibold text-sm">
              Input:{" "}
              <span className="text-sm font-normal">{examples.input2}</span>
            </h2>
            <h2 className="font-semibold text-sm">
              Output:{" "}
              <span className="text-sm font-normal">{examples.output}</span>
            </h2>
          </div>
        ))}
      </div>
      {/* Solution */}
      <div className="mt-5">
        <p
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
          className="font-semibold cursor-pointer flex items-center justify-start text-gray-300 hover:text-black transition-all duration-200 gap-2"
        >
          Solution
        </p>
        {show ? (
          <div className="space-y-5">
            {problem.solution.map((solutions) => (
              <>
                <div>
                  <p className="font-bold text">
                    Solution{" "}
                    <span className="text-gray-700 font-semibold text-base">
                      1 out of {problem.solution.length}
                    </span>
                  </p>
                </div>
                <div className="bg-gray-100/70 p-2 md:p-5">
                  <h2 className="font-semibold text-sm">
                    <span className="text-sm font-normal">
                      {solutions.firstCode}
                    </span>
                  </h2>
                  <h2 className="font-semibold text-sm">
                    <span className="text-sm font-normal">
                      {solutions.secondCode}
                    </span>
                  </h2>
                  <h2 className="font-semibold text-sm">
                    <span className="text-sm font-normal">
                      {solutions.thirdCode}
                    </span>
                  </h2>
                  <h2 className="font-semibold text-sm">
                    <span className="text-sm font-normal">
                      {solutions.fourthCode}
                    </span>
                  </h2>
                </div>
              </>
            ))}
          </div>
        ) : null}

        <div className="mt-10 bg-gray-800/80 cursor-pointer rounded-full w-fit p-2 text-white/90">
          <p>Complete</p>
        </div>
      </div>
    </div>
  );
};

export default Problem;
