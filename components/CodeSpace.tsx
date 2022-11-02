import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Problem } from "../typings";
import { Example, Problem as ProblemType } from "../typings";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

interface Props {
  problem: ProblemType;
}

const CodeSpace = ({ problem }: Props) => {
  const [fontSize, setFontSize] = useState(15);
  const [userTheme, setUserTheme] = useState("vs-light");
  const [code, setCode] = useState(``);
  const [output, setOutput] = useState("");
  const [select, setSelect] = useState(false);
  const [route, setRoute] = useState(false);
  const router = useRouter();

  const options = {
    fontSize: fontSize,
  };

  const handleSubmit = async () => {
    const payload = {
      language: "py",
      code,
    };
    try {
      const { data } = await axios.post(
        // "https://mighty-wildwood-71669.herokuapp.com/run",
        "http://localhost:5000/run",
        payload
      );
      setOutput(data.output);
    } catch ({ response }) {
      //
    }
  };

  const active = "col-span-4 h-fit    bg-transparent   space-y-5  text-black";
  const normal = "col-span-5 h-screen   bg-transparent   space-y-5  text-black";
  return (
    <div className={select ? normal : active}>
      <div className="text-black  flex justify-between px-5 py-1 border border-b border-black/10  ">
        <div className="">
          <ArrowLeftIcon
            onClick={() => {
              setSelect(true);
            }}
            className="h-5 w-5 rounded-full border flex md:hidden "
          />
          <textarea
            className="w-full outline-none focus:border-gray-200 hover:border "
            rows={2}
            cols={60}
            placeholder="Your Output Shows here"
            disabled={true}
            value={output}
          />
        </div>
        <div>
          <p
            onClick={handleSubmit}
            className="bg-gray-600 cursor-pointer px-2 py-1 rounded-lg text-white"
          >
            Run
          </p>
        </div>
      </div>

      <div className="h-screen w-screen md:w-full overflow-y-hidden ">
        <Editor
          options={options}
          width="100% "
          theme={userTheme}
          height="60%"
          defaultLanguage="python"
          defaultValue="first = 'olleH'
        second = 'dlroW  "
          value={code}
          onChange={(value: any) => {
            setCode(value);
          }}
        />
      </div>
    </div>
  );
};

export default CodeSpace;
