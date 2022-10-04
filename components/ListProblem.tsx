import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import Session from "./Session";
import {
  BookOpenIcon,
  RectangleGroupIcon,
  CircleStackIcon,
  ArrowsRightLeftIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import Table from "./Table";
import { Problem as ProblemType } from "../typings";

interface Props {
  problems: ProblemType[];
}

const ListProblem = ({ problems }: Props) => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="max-w-6xl grid grid-cols-6 py-5 px-5 space-x-10 mx-auto  h-screen">
      <div className="col-span-4 space-y-5">
        {/* Header / array */}
        <div className="flex gap-7">
          <p className="text-white font-light">
            Array{" "}
            <span className="bg-white/10 px-3 text-white/40 p-1 text-sm rounded-full ">
              1201
            </span>
          </p>
          <p className="text-white font-light">
            String{" "}
            <span className="bg-white/10 px-3 text-white/40 p-1 text-sm rounded-full ">
              507
            </span>
          </p>
          <p className="font-light text-white">
            Dynamic Proccesing{" "}
            <span className=" bg-white/10 px-3 text-white/40 p-1 text-sm rounded-full ">
              1269
            </span>{" "}
          </p>
          <p className="font-light text-white">
            Sorting{" "}
            <span className="bg-white/10 px-3 text-white/40 p-1 text-sm rounded-full ">
              69
            </span>
          </p>
          <p className="text-white font-light">
            Greedy{" "}
            <span className=" p-1 text-sm rounded-full bg-white/10 px-3 text-white/40">
              169
            </span>
          </p>
        </div>
        {/* Topics */}
        <div className="flex gap-5">
          <p className="flex gap-2 p-2 bg-rose-500 w-fit rounded-full text-white text-sm">
            <span>
              <BookOpenIcon className="h-5 w-5" />
            </span>
            All Topics
          </p>
          <p className="flex gap-2 p-2 border text-white/70 border-rose-500  w-fit rounded-full  text-sm">
            <span>
              <RectangleGroupIcon className="h-5 w-5 text-yellow-500" />
            </span>
            Algorithms
          </p>
          <p className="flex gap-2 p-2 border text-white/70 border-rose-500  w-fit rounded-full  text-sm">
            <span>
              <CircleStackIcon className="h-5 w-5 text-blue-500" />
            </span>
            Database
          </p>
          <p className="flex gap-2 p-2 border text-white/70 border-rose-500  w-fit rounded-full  text-sm">
            <span>
              <ArrowsRightLeftIcon className="h-5 w-5 text-purple-500" />
            </span>
            Concurrency
          </p>
        </div>

        {/* Table  */}
        <div>
          <div className="flex text-white/60 p-2 border-b border-white/40 w-fit text-sm gap-2  font-light">
            <p className=" w-60 rounded-lg  p-2 flex justify-between ">
              Title{" "}
              <span>
                <ChevronUpDownIcon className="h-5 w-5" />
              </span>{" "}
            </p>
            <p className="p-2 mr-10">Solution</p>
            <p className="p-2">Difficulty</p>
          </div>

          {problems.map((problem) => (
            <Table problem={problem} />
          ))}
        </div>
      </div>
      <div className="col-span-2 rounded-lg">
        <Session />
      </div>
    </div>
  );
};

export default ListProblem;
