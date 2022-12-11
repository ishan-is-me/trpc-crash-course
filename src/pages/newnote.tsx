import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Newnote: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl text-black">new note</h1>
      </main>
    </>
  );
};

export default Newnote;