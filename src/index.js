import Head from "next/head";
import Image from "next/image";
import styles from "./styles/Home.module.css";
import Navbar from "./components/navigation/NavBar";
import useSWR from "swr";
import Cards from "./components/House/Cards";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div classname="mx-12 px-3">
        <Cards />
      </div>
    </div>
  );
}