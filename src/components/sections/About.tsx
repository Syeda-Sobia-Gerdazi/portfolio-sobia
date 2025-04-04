import React from 'react';
import { Code, TestTube, Laptop, GraduationCap, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I&apos;m a passionate Software Engineer and QA Specialist with over 3 years of experience in developing and testing web applications. My expertise spans both frontend development with React and quality assurance with automation tools like Cypress and Maestro.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I hold a Master&apos;s degree in Software Engineering from International Islamic University, Islamabad, where I developed a strong foundation in software development principles and practices.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              My dual expertise in development and testing gives me a unique perspective on creating robust, user-friendly applications that meet the highest quality standards.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="font-medium">React Development</span>
              </div>
              <div className="flex items-center gap-2">
                <TestTube className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span className="font-medium">QA Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <Laptop className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="font-medium">UI/UX Design</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 dark:border-blue-700 pl-4 py-1">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-lg">Master of Science in Software Engineering</p>
                  <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded-full">2023</div>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mt-1">International Islamic University, Islamabad</p>
                <div className="flex items-center gap-1 mt-2">
                  <Award className="h-4 w-4 text-amber-500" />
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">GPA: 3.35</p>
                </div>
              </div>
              
              <div className="border-l-4 border-indigo-500 dark:border-indigo-700 pl-4 py-1">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-lg">Bachelor of Science in Software Engineering</p>
                  <div className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded-full">2018</div>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mt-1">International Islamic University, Islamabad</p>
                <div className="flex items-center gap-1 mt-2">
                  <Award className="h-4 w-4 text-amber-500" />
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">GPA: 3.26</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 -z-10 transform translate-x-1/3 translate-y-1/4 opacity-10 dark:opacity-5 animate-pulse" aria-hidden="true">
        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl"></div>
      </div>
      <div className="absolute left-0 top-1/4 -z-10 transform -translate-x-1/3 opacity-10 dark:opacity-5 animate-pulse" aria-hidden="true">
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 blur-3xl"></div>
      </div>
    </section>
  );
};

export default About;
