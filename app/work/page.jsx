"use client";

import { delay, motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import focalx from './../../public/9.png'
import edupress from './../../public/1115.PNG'
import theblog from './../../public/14.PNG'
import Kerdasisshop from './../../public/221.png'
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate sapiente maiores deserunt perferendis reiciendis eos! ",
    stack: [{ name: "React js" }, { name: "Css 3" }],
    image: focalx,
    live: "https://mohammadkerdasi.github.io/Task--8/",
    github: "https://github.com/MohammadKerdasi/Task--8",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate sapiente maiores deserunt perferendis reiciendis eos! ",
    stack: [{ name: "React js" }, { name: "Css 3" }],
    image: edupress,
    live: "https://mohammadkerdasi.github.io/EduPressX71/",
    github: "https://github.com/MohammadKerdasi/EduPressX71",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate sapiente maiores deserunt perferendis reiciendis eos! ",
    stack: [{ name: "React js" }, { name: "Tailwind.css" }, { name: "Redux" }],
    image: theblog,
    live: "https://mohammadkerdasi.github.io/The-Blog/",
    github: "https://github.com/MohammadKerdasi/The-Blog",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate sapiente maiores deserunt perferendis reiciendis eos! ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: Kerdasisshop,
    live: "https://mk-shop-ecru.vercel.app/",
    github: "https://github.com/MohammadKerdasi/Mk-Shop",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , 
        transition : {delay : 2.4 , duration : 0.4 , ease : "easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                some of my {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 blur-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        loading="lazy"
                        quality={100}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns btnStyles="bg-accent hover:bg-accent/90 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" containersStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
