import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, Code, Laptop, TestTube } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative py-24 md:py-36 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              Software Engineer & QA Specialist
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Hi, I&apos;m</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mt-2">
                Syeda Sobia Gerdazi
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
              Passionate about creating robust, user-friendly applications with expertise in React development and test automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                onClick={scrollToAbout}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                size="lg"
              >
                Learn More
                <ArrowDownIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative w-full h-[400px]">
              {/* Animated floating elements */}
              <div className="absolute top-1/4 left-1/4 p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg transform rotate-3 hover-lift">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                <h3 className="text-lg font-semibold">React Development</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Building modern web applications</p>
              </div>
              
              <div className="absolute top-1/2 right-1/4 p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg transform -rotate-2 hover-lift">
                <TestTube className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-2" />
                <h3 className="text-lg font-semibold">QA Automation</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Ensuring software quality</p>
              </div>
              
              <div className="absolute bottom-1/4 left-1/3 p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg transform rotate-1 hover-lift">
                <Laptop className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-2" />
                <h3 className="text-lg font-semibold">UI/UX Design</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Creating intuitive interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-zinc-950" aria-hidden="true"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 -z-10 transform translate-x-1/2 blur-3xl opacity-20 dark:opacity-10 animate-pulse" aria-hidden="true">
        <div className="aspect-square h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 left-0 -z-10 transform -translate-x-1/2 blur-3xl opacity-20 dark:opacity-10 animate-pulse" aria-hidden="true">
        <div className="aspect-square h-72 bg-gradient-to-tr from-blue-400 to-indigo-600 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -z-10 transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-10 dark:opacity-5" aria-hidden="true">
        <div className="aspect-square h-96 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
