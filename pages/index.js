import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import data from "../constants/mock-nft.json";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Kittos </title>
        <link rel="shortcut icon" href="logo.png" />
      </Head>

      {/* HeroSection */}
      <div className="bg-[#1242ef] absolute left-[-250px] top-[-210px] h-[352px] w-[652px] blur-[350px] rounded-full"></div>

      {/* HeroSection */}
      <section className="max-w-[1240px] my-20 mx-auto grid grid-cols-2  gap-2 font-body h-[540px] overflow-hidden top-7">
        <div className="flex flex-col items-start justify-center h-full">
          <h1 className="w-full ">
            Discover New Era of <br /> Crypto Currencies
          </h1>
          <p className="text-[#ADB9C7]">
            Kittos is the primier marketplace for NFT, which are digital items
            you can truly own. Digital items have existed for a long time, but
            never like this.
          </p>
          <button
            type="button"
            className="bg-[#1E50FF] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer transition duration-250 ease-in-out hover:scale-125 hover:drop-shadow-xl hover:shadow-sky-600 w-auto"
          >
            Get Started
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[400px] h-[536px] bg-[#272D37]/60 rounded-2xl flex flex-col p-6">
            <Image
              src="/images/mock.png"
              alt="mock"
              height={352}
              width={352}
              layout="intrinsic"
            ></Image>
            <div className="">
              <h1>Hamlet</h1>
              <div className="h-[56px] flex justify-between">
                <div className="flex flex-row gap-2">
                  <img
                    src="images/mockcreator.jpg"
                    alt="creator-image"
                    className="h-[56px] w-[56px] rounded-xl"
                  />
                  <div>
                    <p className="my-1 text-base text-[#8F9CA9]">Creator </p>
                    <h4 className="my-0">0x000...0000</h4>
                  </div>
                </div>
                <div>
                  <p className="my-1 text-[#8F9CA9]">Current Price</p>
                  <h4 className="my-0 ">4.99 ETH</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#1242ef] absolute left-[1033px] top-[655px] h-[352px] w-[652px] blur-[350px] rounded-full"></div>

      <section className="max-w-[1240px] my-20 mx-auto  gap-2 font-body overflow-hidden top-7 ">
        <h1 className="text-center w-full">Create and sell your NFTs</h1>

        <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 sm:p-12">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full bg-[#272D37] flex flex-col justify-center items-center p-3 rounded-xl"
            >
              <div className="w-[80px] h-[80px] flex  justify-center items-center ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
              <h4 className="font-bold text-[24px] md:text-[14px]">{item.title}</h4>
              <p className="text-center text-[#ADB9C7] text-[14px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
