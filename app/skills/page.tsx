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
  <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-teal-400/20 transition-all duration-300 transform hover:-translate-y-1 h-full">
    <div className="flex items-center mb-4">
      <category.icon className="text-teal-400 mr-3" size={28} />
      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill, index) => (
        <span 
          key={index} 
          className="bg-gray-700 text-teal-300 text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-300 hover:bg-teal-500 hover:text-white cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// Main SkillsPage component - Simplified for natural scrolling
const SkillsPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white p-4 sm:p-8 md:p-12 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Technical Skills</h1>
        <p className="text-lg text-gray-400 mb-12 text-center">
          A collection of the technologies and tools I use to build modern web applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillData.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
