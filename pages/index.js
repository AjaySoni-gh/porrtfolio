import Head from "next/head";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import avtr from "../public/avtr.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import phcase from "../public/phcase.png";
import gptclone from "../public/gptclone.png";
import bookstre from "../public/bookstre.png"
import Rescham from "../public/Rescham.png"



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ajay Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-zinx-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">HELLO THERE! Welcome to my Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl transition-transform duration-100 ease-in-out hover:scale-105 hover:shadow-lg"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:shadow-lg hover:underline"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
  <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-10 ">
    
    <div className="bg-gradient-to-b from-teal-500 md:mr-20 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-full w-60 h-60 relative overflow-hidden mt-10 md:w-80 md:h-80">
      <Image  src={avtr} alt="avatar" layout="fill" objectFit="cover" />
    </div>

    
    <div className="mt-5 md:mt-0 text-center md:text-left p-10 shadow-2xl " >
      <h2 className="text-4xl py-1.5  text-teal-600 font-medium dark:text-teal-400 md:text-5xl  ">
        I am Ajay Soni
      </h2>
      <h3 className="text-2xl py-1.5 dark:text-white md:text-3xl">
        Web Developer
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:mx-0 md:text-xl">
        A dedicated aspiring Next.js and React Developer with a passion for creating innovative web applications and exploring new technologies.
      </p>

      {/* Social Icons */}
      <div className="text-5xl flex justify-center md:justify-start gap-8 py-3 text-gray-600 dark:text-gray-400 ">
        <a href="https://github.com/AjaySoni-gh" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="transition-transform duration-100 ease-in-out hover:scale-105 hover:shadow-lg" />
        </a>
        <a href="https://www.linkedin.com/in/ajay-soni1105/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin  className="transition-transform duration-100 ease-in-out hover:scale-105 hover:shadow-lg" />
        </a>
        <a href="mailto:ajay01@algomau.ca">
          <AiOutlineMail  className="transition-transform duration-100 ease-in-out hover:scale-105 hover:shadow-lg" />
        </a>
      </div>
    </div>
  </div>
</div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
    A dedicated and aspiring Next.js and React Developer with a strong passion for building responsive and user-friendly web applications. Driven by curiosity and a commitment to learning, I am focused on exploring new technologies, frameworks, and tools to enhance my development skills. I have experience with JavaScript and TypeScript and enjoy creating seamless user experiences and efficient code. My goal is to contribute to dynamic projects, improve continuously, and leverage my technical skills to solve real-world problems through innovative web solutions.
             
            </p>
            
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">ShadCN</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">And many other</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} alt="code img" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Lets make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Web Tools I Use</h4>
              <p className="text-gray-800 py-1">Next js a react framework</p>
              <p className="text-gray-800 py-1">Neon for DB</p>
              <p className="text-gray-800 py-1">Kinde for auth</p>
              <p className="text-gray-800 py-1">Vercel for deployment</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
  <Image src={consulting} alt="consult img" width={100} height={100} />
  <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
  <p className="py-2">
    Are you looking for feedback on your current project? I can provide tips and tricks to help elevate it to the next level.
  </p>
  <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
  <p className="text-gray-800 py-1">Next.js</p>
  <p className="text-gray-800 py-1">TypeScript</p>
  <p className="text-gray-800 py-1">GitHub</p>
  <p className="text-gray-800 py-1">Selenium for testing</p>
</div>

</ div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects overview</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Used several technologies to build professional looking projects with todays world 
              <span className="text-teal-500"> functionality </span>
              
            </p>
          
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={Rescham} 
                alt="https://github.com/AjaySoni-gh/restorationchamp"
              />
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/AjaySoni-gh/GPT-Clone" target="_blank" rel="noopener noreferrer">
                <Image
                className="rounded-lg object-cover  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={gptclone}
                alt="https://github.com/AjaySoni-gh/GPT-Clone"                
               />
              </a>

            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/AjaySoni-gh/phonecase_store" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                 src={phcase}
                 alt="https://github.com/AjaySoni-gh/phonecase_store"
              /> </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://github.com/AjaySoni-gh/BookStore-FS" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg object-cover  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={bookstre}
                alt="https://github.com/AjaySoni-gh/BookStore-FS"
              /> </a>
            </div>
          
          </div>
        </section>
      </main>
    </div>
  );
}
