import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { signIn, signOut } from "next-auth/react";
import Problem from "../components/Problem";
import Container from "../components/Container";
import { Example, Problem as ProblemType, Solution } from "../typings";
import { fetchProblems } from "../utils/fetchProblems";
import { fetchExamples } from "../utils/fetchExamples";
import { fetchSolutions } from "../utils/fetchSolutions";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import ListProblem from "../components/ListProblem";

interface Props {
  problems: ProblemType[];
  solutions: Solution[];
  examples: Example[];
}

const Home = ({ problems, examples, solutions }: Props) => {
  const { data: session } = useSession();

  return (
    <div className="h-screen ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session ? (
        <div className="bg-black/90 overflow-hidden   min-h-screen ">
          <div className="px-5 max-w-6xl mx-auto py-2 flex justify-between  items-center rounded-lg  bg-white/5 text-white ">
            <div className="flex justify-center items-center gap-7 text-gray-200 ">
              <h1 className="font-medium text-lg text-white">Nglonix</h1>
              <h1 className="text-sm ">Explore</h1>
              <h1 className="text-sm  border-b text-white font-semibold ">
                Problems
              </h1>
              <h1 className="text-sm  hidden md:inline">Discuss</h1>
            </div>
            <div>
              <img
                onClick={() => signOut()}
                className="h-7 border w-7 rounded-full object-cover"
                src={session?.user?.image || "https://links.papareact.com/gll"}
              />
            </div>
          </div>
          <ListProblem problems={problems} />
        </div>
      ) : (
        <>
          <Header />
          <div className="flex flex-col justify-center items-center mt-14 gap-6">
            <p className="text-xl  md:text-3xl lg:text-4xl tracking-[7px] md:tracking-[10px]  text-sky-900 font-medium">
              A New Way to Learn Python
            </p>
            <h1 className="md:text-xl  tracking-[0px] max-w-4xl text-sky-900/70 font-medium">
              Expand your knowledge and prepare for technical interviews.
            </h1>
            <button
              // onClick={() => {}}
              className="md:text-xl  text-blue-700 border border-blue-700 p-2 rounded-full px-5"
            >
              Get Started
            </button>

            <div className="shadow-xl  mt-10  rounded-lg shadow-black/40">
              <img
                className="lg:w-[52rem] w-[30rem] md:w-[42rem] rounded-lg "
                src="https://cdn.sanity.io/images/mrfd4see/production/42eddbcf065bf6ad0444a20ea93533d27dfdabf2-1920x867.png?w=2000&fit=max&auto=format"
              />
            </div>

            <footer>
              <p>end of the pasge</p>
            </footer>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const problems: ProblemType[] = await fetchProblems();
  const examples: Example[] = await fetchExamples();
  const solutions: Solution[] = await fetchSolutions();

  return {
    props: {
      problems,
      examples,
      solutions,
    },

    revalidate: 20,
  };
};
