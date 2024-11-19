"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaGithub, FaTs} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const about = {
  title : 'About me',
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste accusantium praesentium.", 
  info : [
    {
      fieldName : 'Name',
      feildValue : "Mohammad Kerdasi"
    },
    {
      fieldName : 'Phone',
      feildValue : "+96332262466"
    },
    {
      fieldName : 'Experience',
      feildValue : "1+ Years"
    },
    {
      fieldName : 'Nationality',
      feildValue : "Palestinian"
    },
    {
      fieldName : 'Freelance',
      feildValue : "Available"
    },
    {
      fieldName : 'Email',
      feildValue : "mohammadkerdasi033@gmail.com"
    },
    {
      fieldName : 'Languages',
      feildValue : "Arabic (Native) , English"
    },
  ]
}

const experience = {
  icon : './../../public/badge.svg',
  title : 'My experience',
  descerption : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste accusantium praesentium.',
  items: [
    {
      company : 'Focal x agency',
      position : 'Front-End Developer BEG Intern',
      duration : 'December 2023'
    },
    {
      company : 'Focal x agency',
      position : 'Front-End Developer ADV Intern',
      duration : 'August 2024'
    },
  ]
}

const education = {
  icon : './../../public/badge.svg',
  title : 'My education',
  descerption : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste accusantium praesentium.',
  items: [
    {
      institution : ' Focal X Agency ',
      degree : 'Intern Certified Front-End BEG Web Developer',
      duration : 'December 2023 - July 2024'
    },
    {
      institution : ' Focal X Agency ',
      degree : ' Intern Certified Front-End ADV Web Developer',
      duration : 'August 2023 - January 2024'
    },
    {
      institution : 'Front-End Track ',
      degree : '  Front-End Web Development Bootcamp',
      duration : 'February 2024 - May 2024'
    },
    {
      institution : ' Tishreen University ',
      degree : ' Computer engineering Third Year   ',
      duration : 'Septemper 2022 - Until Now'
    },
  ]
}
const skills = {
  icon : './../../public/badge.svg',
  title : 'My skills',
  descerption : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste accusantium praesentium.',
  skillList: [
    {
      icon : <FaHtml5/>,
      name : 'html 5'
    },
    {
      icon : <FaCss3/>,
      name : 'css 3'
    },
    {
      icon : <FaJs/>,
      name : 'javascript'
    },
    {
      icon : <FaReact/>,
      name : 'react.js'
    },
    {
      icon : <SiNextdotjs/>,
      name : 'next.js'
    },
    {
      icon : <SiTailwindcss/>,
      name : 'tailwind.css'
    },
    {
      icon : <FaFigma/>,
      name : 'figma'
    },
    {
      icon : <SiTypescript/>,
      name : 'typescript'
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger  } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
  return <motion.div 
  initial={{opacity: 0}}
  animate={{
    opacity :1 , 
    transition : { delay : 2.4, duration : 0.4, ease :'easeIn' },
  }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs
      defaultValue="experience"
      className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className ="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience" >Experience</TabsTrigger>
          <TabsTrigger value="education" >Education</TabsTrigger>
          <TabsTrigger value="skills" >Skills</TabsTrigger>
          <TabsTrigger value="about" >About me</TabsTrigger>
        </TabsList>

        <div className="min-h-[70vh] w-full">
          <TabsContent value='experience' className='w-full'>
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{experience.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {experience.descerption}
            </p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item,index) => {
                  return (
                  <li key={index} className="bg-[#232329] md:h-[200px] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </ScrollArea>
          </div>
          </TabsContent>
          <TabsContent value='education' className='w-full'>
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{education.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {education.descerption}
            </p>
            <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item,index) => {
                  return (
                  <li key={index} className="bg-[#232329] md:h-[200px] h-[300px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.institution}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </ScrollArea>
          </div>
          </TabsContent>
          <TabsContent value='skills' className='w-full h-full'>
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.descerption}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
              {skills.skillList.map((skill, index) => (
                <li key={index} >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>
          </TabsContent>
          <TabsContent value='about' className='w-full text-center xl:text-left'>
          <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"></p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 md:max-w-[700px] max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item, index) =>(
                <li className="flex items-center justify-center xl:justify-start gap-4" key={index}>
                  <span className="text-white/60 md:text-[18px] text-[14px]">{item.fieldName}</span>
                  <span className="md:text-xl text-[14px]">{item.feildValue}</span>
                </li>
              ))}
            </ul>
          </div>
          </TabsContent>
          
        </div>
      </Tabs>
    </div>
  </motion.div>;
};

export default Resume;
