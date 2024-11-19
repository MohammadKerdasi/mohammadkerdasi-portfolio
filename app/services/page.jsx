"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    descreption:
      "Building responsive, high-performance websites with modern technologies, ensuring seamless functionality across all devices.",
    href: "",
  },
  {
    num: "02",
    title: "Building Figma Designs",
    descreption:
      "Transforming Figma designs into pixel-perfect, interactive, and fully functional web pages with clean, efficient code.",
    href: "",
  },
  {
    num: "03",
    title: "Git & GitHub",
    descreption:
      "Managing version control and streamlining team collaboration using Git and GitHub for organized, efficient workflows.",
    href: "",
  },
  {
    num: "04",
    title: "Landing Pages",
    descreption:
      "Creating visually appealing, fast-loading landing pages optimized for user engagement and lead generation.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className= "grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center group">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href}
                  className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.descreption}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
