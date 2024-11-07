import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className=" overflow-x-hidden ">
      <section className="bg-homebg md:h-screen relative  -mt-64 md:-mt-40 xl:mt-0 ">

        <div className="w-full h-full flex flex-col justify-center items-center align-middle relative z-20 px-2">
          <div
              className="top-32 md:top-40  justify-center z-0" style={{marginBottom: "20px"}}>

            <Image
                className="h-full w-full object-fit rounded-xl "
                src={'logo_white-blue.svg'}
                alt="epam-logo"
                width={300}
                height={300}
            />
          </div>
          <h1 className="text-5xl md:text-8xl xl:text-9xl uppercase text-white banner--text--purple">
            Ready, Spin, Answer!
          </h1>
          <p className="text-white text-4xl px-10 md:px-20 xl:px-52 text-center mt-10 banner--text--purple ">
            Keep up to date your interviewing skill with this tool.
            Spin the wheel and answer the question!
          </p>
          <Link href={'/luckydraw'}>
            <button
                className="animate-pulse py-[4px] font-semibold  border-2 border-btngreen bg-btngreen text-white mt-10 w-[300px] rounded-2xl text-xl ">
              Question Wheel
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
