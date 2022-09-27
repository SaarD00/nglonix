import { HeartIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Problem = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="col-span-2 bg-transparent border border-r overflow-y-scroll   p-5">
      {/* Header */}
      <div className="">
        <h1 className="font-medium">1. Two Sum</h1>
        <div className="flex items-center gap-5 p-3">
          <p className="text-green-700 font-medium">Easy</p>
          <HeartIcon className="h-4 w-4" />
        </div>
      </div>
      <div className="border-b border-black/10" />
      {/* Description */}
      <div className="p-5">
        <p className="text-sm">
          Given a set of letters{" "}
          <span className="bg-gray-100/70 p-1 rounded-lg italic">first</span>{" "}
          <span className="bg-gray-100/70 p-1 rounded-lg italic">second</span>{" "}
          reverse the strings and return the following string
          <span className="bg-gray-100/70 p-1 rounded-lg italic">
            HelloWorld
          </span>
          in the terminal.
        </p>
      </div>

      {/* Example */}
      <div className="space-y-5">
        <div>
          <p className="font-bold text">Example 1:</p>
        </div>
        <div className="bg-gray-100/70 p-5">
          <h2 className="font-semibold text-sm">
            Input: <span className="text-sm font-normal">first = "olleH"</span>
          </h2>
          <h2 className="font-semibold text-sm">
            Input: <span className="text-sm font-normal">second = "dlroW"</span>
          </h2>
          <h2 className="font-semibold text-sm">
            Output: <span className="text-sm font-normal">HelloWorld</span>
          </h2>
        </div>
      </div>
      {/* Solution */}
      <div className="mt-5">
        <p
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
          className="font-semibold cursor-pointer flex items-center justify-start text-gray-300 hover:text-black transition-all duration-200 gap-2"
        >
          <span>
            <HiOutlineMenuAlt1 />
          </span>
          Solution
        </p>
        {show ? (
          <div className="space-y-5">
            <div>
              <p className="font-bold text">Example 1:</p>
            </div>
            <div className="bg-gray-100/70 p-5">
              <h2 className="font-semibold text-sm">
                <span className="text-sm font-normal">first = "olleH"</span>
              </h2>
              <h2 className="font-semibold text-sm">
                <span className="text-sm font-normal">second = "dlroW"</span>
              </h2>
              <h2 className="font-semibold text-sm">
                <span className="text-sm font-normal">
                  final = (second + first)[::-1]
                </span>
              </h2>
              <h2 className="font-semibold text-sm">
                <span className="text-sm font-normal">print(final)</span>
              </h2>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Problem;
