import Circles from "/components/Circles";

import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">
            Let's <span className="text-accent">connect</span>
          </h2>
          <div className="flex flex-col items-center gap-2">
            <Link
              href={
                "https://www.linkedin.com/in/franco-santiago-yampa-193a96272/"
              }
              className="text-4xl text-blue-900"
            >
              LinkedIn
            </Link>
            <h1 className="text-3xl text-red-800">
              Email: Francocavs02@gmail.com
            </h1>
            <h1 className="text-3xl text-black ">Phone: +543875803095</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
