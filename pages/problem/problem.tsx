import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import { signIn, signOut } from "next-auth/react";
import Container from "../../components/Container";
import { Example, Problem as ProblemType, Solution } from "../../typings";
import { fetchProblems } from "../../utils/fetchProblems";
import { fetchExamples } from "../../utils/fetchExamples";
import { fetchSolutions } from "../../utils/fetchSolutions";

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
        <div className="bg-gray-100 overflow-hidden min-h-screen">
          <Header />
          <Container problems={problems} />
        </div>
      ) : (
        <>
          <Header />
          <div className="flex flex-col justify-center items-center mt-14 gap-6 ">
            <p className="text-xl  md:text-3xl lg:text-4xl tracking-[7px] md:tracking-[10px]  text-sky-900 font-medium">
              A New Way to Learn Python
            </p>
            <h1 className="md:text-xl  tracking-[0px] max-w-4xl text-sky-900/70 font-medium">
              Expand your knowledge and prepare for technical interviews.
            </h1>
            <button
              onClick={() => {
                signIn();
              }}
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
