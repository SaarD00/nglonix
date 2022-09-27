import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { signIn, signOut } from "next-auth/react";
import Problem from "../components/Problem";
import Container from "../components/Container";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className="h-screen overflow-y-scroll  ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session ? (
        <div className="bg-gray-100 overflow-hidden min-h-screen">
          <Header />
          <Container />
        </div>
      ) : (
        <>
          <Header />
          <div className="flex flex-col justify-center items-center mt-14 gap-6">
            <p className="text-4xl tracking-[10px] text-sky-900 font-medium">
              A New Way to Learn Python.
            </p>
            <h1 className="text-xl tracking-[0px] max-w-4xl text-sky-900/70 font-medium">
              Expand your knowledge and prepare for technical interviews.
            </h1>
            <button
              onClick={() => {
                signIn();
              }}
              className="text-xl text-blue-700 border border-blue-700 p-2 rounded-full px-5"
            >
              Get Started
            </button>

            <div className="shadow-xl mt-10 rounded-lg shadow-black">
              <img
                className="w-[52rem] rounded-lg "
                src="https://cdn.discordapp.com/attachments/855452025634291823/1024308645992874014/unknown.png"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
