import React from "react";

const session = () => {
  return (
    <div className="bg-white/5  p-8 rounded-lg">
      <div className="flex justify-between">
        <p className="text-white/60 font-semibold">Session</p>
        <p className="text-white/60  text-sm font-light px-2 bg-white/5">
          Anonymous
        </p>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-3 flex justify-center items-center mt-5">
          <div className="border-2 w-20 border-white/20 rounded-full flex flex-col px-4 py-1 justify-center items-center text-white/50">
            <p className="text-xs">All</p>
            <p className="text-2xl text-white border-b px-3 border-white/30">
              0
            </p>
            <p className="text-white/30">2430</p>
          </div>
        </div>
        <div className="col-span-2 flex justify-center flex-col items-center space-y-2">
          <p className="text-emerald-500 text-sm">Easy</p>
          <p className="text-yellow-500 text-sm">Medium</p>
          <p className="text-red-500 text-sm">Hard</p>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center space-y-1 text-sm">
          <p className="text-white/40 font-light">
            <span className="text-white">0</span>/597
          </p>
          <p className="text-white/40 font-light">
            <span className="text-white">0</span>/1297
          </p>
          <p className="text-white/40 font-light">
            <span className="text-white">0</span>/536
          </p>
        </div>
      </div>
    </div>
  );
};

export default session;
