import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Problem } from "../typings";

const CodeSpace = () => {
  const [fontSize, setFontSize] = useState(15);
  const [userTheme, setUserTheme] = useState("vs-light");
  const [code, setCode] = useState(``);
  const [output, setOutput] = useState("");
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
        "https://mighty-wildwood-71669.herokuapp.com/run",
        payload
      );
      setOutput(data.output);
    } catch ({ response }) {
      //
    }
  };

  return (
    <div className="col-span-4    bg-transparent   space-y-5  text-black">
      <div className="text-black  flex justify-between px-5 py-1 border border-b border-black/10  ">
        <div className="">
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

      <div className="h-screen  overflow-y-hidden ">
        <Editor
          options={options}
          width="100% "
          theme={userTheme}
          height="75%"
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
