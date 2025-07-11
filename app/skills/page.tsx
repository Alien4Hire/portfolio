'use client';

import React from 'react';
import {
  LayoutTemplate,
  Server,
  Database,
  CloudCog,
  TestTube2,
  BrainCircuit
} from 'lucide-react';

// Defining the type for a single skill category
interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

// Data for your skills, categorized based on your resume
const skillData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: LayoutTemplate,
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Redux', 'Vue.js', 'Angular', 'React Native'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Nest.js', 'Express.js', 'GraphQL', 'RESTful APIs', 'Microservices', 'Serverless Architecture', 'Java', 'SpringBoot'],
  },
  {
    title: 'Databases & ORMs',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Prisma', 'Drizzle ORM', 'Elasticsearch'],
  },
  {
    title: 'Cloud & DevOps',
    icon: CloudCog,
    skills: ['AWS (Lambda, S3, EC2, RDS)', 'Docker', 'CI/CD', 'Jenkins', 'GitLab', 'CircleCI', 'Azure DevOps', 'IAM', 'SQS/SNS'],
  },
  {
    title: 'Testing & Tooling',
    icon: TestTube2,
    skills: ['Jest', 'Cypress', 'Mocha', 'React Testing Library', 'Git', 'GitHub Copilot', 'Podman'],
  },
  {
    title: 'Professional Skills',
    icon: BrainCircuit,
    skills: ['Project Management', 'Team Leadership', 'Mentorship', 'Agile Methodologies', 'Strategic Planning', 'System Architecture'],
  },
];

// Reusable component for a single skill card
const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-[#2a2a2a] p-5 rounded-xl shadow-lg hover:shadow-teal-400/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"> {/* Adjusted padding, added flex-col */}
    <div className="flex items-center mb-3"> {/* Adjusted margin-bottom */}
      <category.icon className="text-teal-400 mr-2" size={24} /> {/* Adjusted icon size and margin */}
      <h3 className="text-xl font-bold text-white leading-tight">{category.title}</h3> {/* Adjusted font size and line height */}
    </div>
    <div className="flex flex-wrap gap-2 mt-auto"> {/* Added mt-auto to push skills to bottom */}
      {category.skills.map((skill, index) => (
        <span
          key={index}
          className="bg-gray-700 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full transition-colors duration-300 hover:bg-teal-500 hover:text-white cursor-default" // Adjusted font size and padding
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// Main SkillsPage component
const SkillsPage: React.FC = () => {
  return (
    // section now uses pt-20 for top padding on mobile, then larger on md
    <section className="min-h-screen bg-[#1a1a1a] text-white pt-20 pb-8 px-4 md:pt-24 md:pb-12 md:px-8 flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Title adjusted for mobile, added mb-8 for space */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center drop-shadow-lg text-teal-300">My Skills</h1> {/* Changed title, added shadow, teal color */}
        <p className="text-md text-gray-400 mb-10 text-center px-2"> {/* Adjusted font size, mb, and added horizontal padding */}
          A comprehensive overview of the technologies, tools, and methodologies I leverage to build robust and scalable web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Changed grid to 1 column on mobile, 2 on small screens */}
          {skillData.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;