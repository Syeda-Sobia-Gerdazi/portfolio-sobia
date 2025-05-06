import React from 'react';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "WICK",
      location: "USA",
      position: "Software Quality Assurance Engineer",
      period: "July 2024 - Present",
      description: [
        "Led automation efforts for mobile application testing using Maestro",
        "Conducted comprehensive testing of cross-platform mobile applications (iOS and Android)",
        "Developed and executed test strategies for various app features",
        "Utilized Postman for API testing and backend service validation",
        "Integrated testing tools with CI/CD pipelines, reducing manual efforts by 85%",
        "Collaborated with cross-functional teams to identify and resolve issues promptly",
        "Documented test plans, results, and defect logs in Jira"
      ],
      tools: ["Maestro", "Jira", "Postman", "TestFlight", "Jmeter"]
    },
    {
      company: "DEVTEK",
      location: "Austin, Texas, United States",
      position: "Front End Developer- React",
      period: "April 2022 - July 2024",
      description: [
        "Developed and maintained scalable web applications using React.js and TypeScript",
        "Created dynamic, reusable components utilizing React Custom Hooks and Redux",
        "Collaborated with back-end engineers and UX/UI designers",
        "Utilized React Hook Form for efficient form handling and validation",
        "Implemented data visualization features using Recharts",
        "Enhanced application performance using React Query",
        "Streamlined deployment processes using GitHub and Jira",
        "Designed and enhanced UI components using Chakra UI",
        "Integrated JSPdf for dynamic report generation"
      ],
      tools: ["React", "JavaScript", "TypeScript", "VS Code", "Maestro", "Cypress"]
    },
    {
      company: "DEVTEK",
      location: "Austin, Texas, United States",
      position: "Software Quality Assurance Engineer",
      period: "February 2021 - July 2024",
      description: [
        "Led automation efforts using Cypress with TypeScript, reducing manual testing time by 65%",
        "Conducted cross-browser and cross-device testing using Browser Stack",
        "Performed smoke and regression testing in production and pre-production environments",
        "Created and managed detailed test cases using TestRails",
        "Automated end-to-end testing flows for web applications",
        "Documented and reported software defects using Jira",
        "Conducted API testing with Postman",
        "Mentored and trained new interns in Cypress automation",
        "Designed and executed comprehensive test plans",
        "Participated in Agile Scrum ceremonies",
        "Enhanced QA processes and implemented best practices"
      ],
      tools: ["Cypress (TypeScript)", "Test Rails", "Confluence", "Browser Stack", "Jira", "Postman"]
    },
   
  ];

  return (
    <section id="experience" className="py-16 relative">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Work Experience
      </h2>
      
      <div className="space-y-12 relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 ml-6 md:ml-8 hidden md:block"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-0 md:pl-20">
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 hidden md:block"></div>
            
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 border border-zinc-200 dark:border-zinc-700 transition-all hover:shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{exp.position}</h3>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400 mt-2 md:mt-0">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{exp.company}</span>
                <span className="mx-2">•</span>
                <div className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
