import React from 'react';
import { Button } from "@/components/ui/button";
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon, SendIcon } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700 hover-lift">
              <h3 className="text-xl font-semibold mb-6 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full text-white group-hover:scale-110 transition-transform shadow-md">
                    <MailIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-white">Email</h3>
                    <a 
                      href="mailto:sobiagerdazi2014@gmail.com" 
                      className="text-blue-600 dark:text-blue-400 hover:underline group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                    >
                      sobiagerdazi2014@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Phone number removed as requested by user for privacy */}
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-full text-white group-hover:scale-110 transition-transform shadow-md">
                    <LinkedinIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-white">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/syeda-sobia-gerdazi-1b712a172/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                    >
                      linkedin.com/in/syeda-sobia-gerdazi-1b712a172
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full text-white group-hover:scale-110 transition-transform shadow-md">
                    <GithubIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-white">GitHub</h3>
                    <a 
                      href="https://github.com/Syeda-Sobia-Gerdazi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                    >
                      github.com/Syeda-Sobia-Gerdazi
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-teal-500 to-green-600 p-3 rounded-full text-white group-hover:scale-110 transition-transform shadow-md">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-white">Location</h3>
                    <p className="text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-xl opacity-70 dark:opacity-30"></div>
          </div>
          
          <div className="relative">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700 hover-lift">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <SendIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold">Send Me a Message</h3>
              </div>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 dark:bg-zinc-900 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 dark:bg-zinc-900 transition-colors"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 dark:bg-zinc-900 transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-xl opacity-70 dark:opacity-30"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 -z-10 transform translate-x-1/3 translate-y-1/4 opacity-10 dark:opacity-5" aria-hidden="true">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl"></div>
      </div>
      <div className="absolute left-0 top-1/4 -z-10 transform -translate-x-1/3 opacity-10 dark:opacity-5" aria-hidden="true">
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Contact;
