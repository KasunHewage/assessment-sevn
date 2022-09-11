import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Bottom from "../components/Bottom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" min-h-screen bg-black">
        <div className=" mx-[23px] md:mx-[81px]">
          {/* navbar */}
          <div>
            <Navbar />
          </div>

          {/* header */}
          <div className=" mt-[50px]">
            <Header />
          </div>

          {/* about */}
          <div className=" my-[145px]">
            <About />
          </div>

          {/* section 01 */}
          <div>
            <SectionOne />
          </div>

          {/* bottom */}
          <div className=" pt-[100px] pb-[50px]">
            <Bottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
