import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
  SiFirewalla,
  SiProxmox,
  SiPython,
  SiOwasp,
  SiKashflow,
  SiKaspersky,
  SiLogseq,
  SiPfsense,
  SiOpenvpn,
  SiOpenssl,
  SiWireshark,
  SiLinux,
  SiWindows11,
  SiMacos,
  SiAmazonaws,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={1}/>,
          <FaCss3 key={2}/>,
          <FaJs key={3}/>,
          <FaReact key={4}/>,
          <SiNextdotjs key={5}/>,
          <SiTypescript key={6}/>,
        ],
      },
      {
        title: "Cibersecurity",
        icons: [
          <SiPython key={1}/>,
          <SiProxmox key={2}/>,
          <SiFirewalla key={3}/>,
          <SiOwasp key={4}/>,
          <SiOpenvpn key={5}/>,
          <SiOpenssl key={6}/>,
          <SiWireshark key={7}/>,
          <SiPfsense key={8}/>,
          <SiAmazonaws key={9}/>,
        ],
      },
      {
        title: "Operating Systems",
        icons: [<SiLinux key={1}/>, <SiWindows11 key={2}/>, <SiMacos key={3}/>],
      },
    ],
  },
  {
    title: "awards",
    info: [],
  },
  {
    title: "experience",
    info: [
      {
        title: "Computer Security Auditor-UCASAL",
        stage: "April to May,2023",
      },
      {
        title: "IT support technician-NETSECOM",
        stage: "June  to August,2023",
      },
      {
        title: "Full Stack Developer-Genmedicus",
        stage: "Currently Working",
      },
      {
        title:
          "Responsible for cybersecurity and asset protection-BANCO MASVENTAS S.A",
        stage: "Currently Working",
      },
    ],
  },
  {
    title: "Credentials",
    info: [
      {
        title:
          "Graduate in Accounting and Business Administration-Instituto Padre Gabriel Tommasini",
        stage: "2018",
      },
      {
        title: "IT technician-Universidad Catolica de Salta",
        stage: "2023",
      },
      {
        title:
          "Curso de Introducción a la Seguridad Informática desde Cero!-Udemy",
        stage: "2023",
      },
      {
        title: "SQL: Creación de Bases de Datos (De cero a profesional)-Udemy",
        stage: "2021",
      },
      {
        title: "Python sin fronteras: HTML, CSS, Flask y MySQL-Udemy",
        stage: "2021",
      },
      {
        title:
          "CURSO DE ESPECIALIZACIÓN PYTHON CON DJANGO-Facultad de Informática de la Universidad Pontificia de Salamanca",
        stage: "2021",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//Counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-32">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Texto*/}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Empowering <span className="text-accent">Digital Landscapes</span>{" "}
            Programming and Cybersecurity
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Throughout my professional journey, I have gained diverse
            experiences, ranging from providing technical support in Active
            Directory and performing operating system installations, to working
            as a programmer in a company in Mexico and also freelancer.
            Currently, I am engaged in the dynamic field of computer security at
            a bank, where I hold responsibilities for ensuring the safeguarding
            of its digital assets.
          </motion.p>
          {/*counters */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/*Experiencia */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Years of Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/*Informacion*/}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
