import React from "react";
import {
  ChevronUpDownIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { Problem as ProblemType } from "../typings";
import Link from "next/link";

interface Props {
  problem: ProblemType;
}

const easy = "p-2 text-teal-400";
const hard = "p-2 text-red-500";

const Table = ({ problem }: Props) => {
  return (
    <Link href={`problem/problem`}>
      <div className="odd:bg-white/5 w-fit flex-shrink-0 flex ">
        {/* Header */}

        <div className="flex text-white px-2 py-2   w-fit text-sm gap-2  font-light">
          <p className="hover:text-sky-400   w-60 rounded-lg text-white  p-2 ">
            {problem.title}{" "}
          </p>
          <p className="p-2 mr-20">
            <DocumentCheckIcon className="h-5 w-5 text-purple-500" />
          </p>
          <p className={problem.difficulty == "Easy" ? easy : hard}>
            {problem.difficulty}
          </p>
          <p className="p-2 ml-12 text-sm text-white hidden lg:inline">
            {problem.attempts}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Table;
