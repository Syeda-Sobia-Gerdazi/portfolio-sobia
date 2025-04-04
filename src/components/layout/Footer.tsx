import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              &copy; {new Date().getFullYear()} Syeda Sobia Gerdazi. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:sobiagerdazi2014@gmail.com" 
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              aria-label="Email"
            >
              <MailIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/Syeda-Sobia-Gerdazi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/syeda-sobia-gerdazi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
