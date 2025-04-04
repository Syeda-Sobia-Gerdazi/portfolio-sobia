import React from 'react';
import { CheckCircleIcon, Code, TestTube, Wrench, Briefcase } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        "React", "Redux", "React Hooks", "TypeScript", "JavaScript", 
        "HTML", "CSS", "Chakra UI", "React Hook Form", "React Query"
      ]
    },
    {
      title: "Testing & QA",
      icon: <TestTube className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      skills: [
        "Cypress", "Maestro", "Postman", "API Testing", "End-to-End Testing",
        "Regression Testing", "Functional Testing", "Performance Testing", "Mobile Testing", "Browser Stack"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      skills: [
        "Git", "GitHub", "Jira", "VS Code", "TestRails", 
        "Confluence", "CI/CD", "TestFlight", "Jmeter", "Webpack"
      ]
    },
    {
      title: "Other Skills",
      icon: <Briefcase className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      skills: [
        "Java", "NodeJS", "jQuery", "C", "C++",
        "Agile Methodology", "Scrum", "Test Documentation", "Bug Tracking", "Technical Writing"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Skills &amp; Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            My technical toolkit spans frontend development and quality assurance, allowing me to build and test robust applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-700 transition-all hover-lift hover:border-blue-300 dark:hover:border-blue-700"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 group">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                      <CheckCircleIcon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    </div>
                    <span className="text-zinc-700 dark:text-zinc-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skill level indicators */}
        <div className="mt-16 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-700 hover-lift">
          <h3 className="text-xl font-semibold mb-8 text-center">Core Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {[
              { name: "React Development", level: 85, color: "from-blue-600 to-indigo-600" },
              { name: "Test Automation", level: 90, color: "from-indigo-600 to-purple-600" },
              { name: "TypeScript", level: 80, color: "from-blue-500 to-cyan-500" },
              { name: "API Testing", level: 85, color: "from-purple-600 to-pink-600" },
              { name: "UI/UX Implementation", level: 75, color: "from-teal-500 to-green-500" }
            ].map((skill, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-zinc-800 dark:text-zinc-200 font-medium">{skill.name}</span>
                  <span className="text-zinc-600 dark:text-zinc-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-3">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="absolute -right-2 top-7 text-xs font-semibold">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white`}>
                    <span className="opacity-0">.</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 -z-10 transform translate-x-1/3 opacity-10 dark:opacity-5" aria-hidden="true">
        <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl"></div>
      </div>
      <div className="absolute left-0 bottom-1/4 -z-10 transform -translate-x-1/3 opacity-10 dark:opacity-5" aria-hidden="true">
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Skills;
