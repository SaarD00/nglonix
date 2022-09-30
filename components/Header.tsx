import React from "react";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { NewspaperIcon } from "@heroicons/react/24/outline";
function Header({}) {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <div className="px-5 py-2 flex justify-between items-center border-b border-black/10 bg-white ">
            <div className="flex justify-center items-center gap-7">
              <h1 className="font-medium text-lg">Nglonix</h1>
              <h1 className="text-sm text-black/70">Explore</h1>
              <h1 className="text-sm text-black/70">Problems</h1>
              <h1 className="text-sm text-black/70 hidden md:inline">
                Discuss
              </h1>
            </div>
            <div>
              <img
                onClick={() => signOut()}
                className="h-7 border w-7 rounded-full object-cover"
                src={session?.user?.image || "https://links.papareact.com/gll"}
              />
            </div>
          </div>
          <div className="px-5 flex justify-between items-center  ">
            <div className="flex justify-center items-center gap-7 ">
              <h1 className="text-xs text-black/70 flex justify-center items-center gap-2 bg-white p-2 border-r border-black/20">
                <span>
                  <NewspaperIcon className="h-5 w-5" />
                </span>
                Description
              </h1>
              <h1 className="text-xs text-black/70">Solution</h1>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-between items-center px-5 py-7 max-w-5xl mx-auto">
          <div>
            <h1 className="text-3xl text-blue-900 ">Nglonix</h1>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-10 text-rose-500">
            <p className="bg-transparent hover:bg-rose-500 hover:text-white transition-all duration-300 p-2 rounded-full ease-out">
              Explore
            </p>
            <p className="bg-transparent hidden md:inline hover:bg-rose-500 hover:text-white transition-all duration-300 p-2 rounded-full ease-out">
              Product
            </p>
            <p className="bg-transparent hover:bg-rose-500 hover:text-white transition-all duration-300 p-2 rounded-full ease-out">
              Developer
            </p>
            <p
              onClick={() => {
                signIn();
              }}
              className="border border-rose-500 rounded-full px-2 py-1 hover:bg-rose-500 hover:p-2 transition-all duration-300 ease-in-out hover:border-none hover:text-white"
            >
              Log In
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
