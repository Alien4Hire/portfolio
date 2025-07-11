'use client';

import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

// Defining the type for a single work experience item
interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  image: string;
  link?: string; // Optional link
  tech: string[];
}

// Defining the props for the ProjectCard component
interface ProjectCardProps extends WorkExperience {
  isLast: boolean;
}

// Data for your work experience (kept for context, no changes here)
const workExperience: WorkExperience[] = [
  {
    role: 'Founder & Creative Director',
    company: 'Rift Pickleball',
    duration: 'Jan 2025 – Present',
    description: [
      'Launched a D2C pickleball brand, overseeing product design, manufacturing, and e-commerce.',
      'Engineered a custom smart paddle IoT system using Arduino and C++ for real-time impact analysis.',
      'Produced viral marketing content, achieving over 6 million views and driving brand growth.',
    ],
    image: 'images/riftpickleball.png',
    link: 'http://www.riftpickleball.com',
    tech: ['C++', 'Arduino', 'Bluetooth', 'Shopify', 'Digital Marketing'],
  },
  {
    role: 'Full Stack Software Engineer',
    company: 'Optum (UnitedHealth Group)',
    duration: 'Aug 2023 – Jan 2025',
    description: [
      'Designed key features for a banking platform facilitating provider payments via Stripe.',
      'Engineered the backend using a microservices architecture with Booster, TypeScript, and Drizzle ORM.',
      'Built and optimized GraphQL APIs to handle large-scale financial transactions efficiently.',
    ],
    image: 'images/Optum-logo.png',
    tech: ['TypeScript', 'Booster', 'Drizzle ORM', 'MySQL', 'GraphQL', 'AWS'],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Nexient / NTT Data',
    duration: 'Aug 2020 – Aug 2023',
    description: [
      'Led the design of Cooley Law Firm’s investor platform, managing over $100M in investments.',
      'Architected and developed the SCG Gas web application using React, Node.js, and AWS microservices.',
      'Mentored junior developers and improved CI/CD workflows using Jenkins and Azure DevOps.',
    ],
    image: 'images/NTTData.png',
    tech: ['React.js', 'Node.js', 'Java', 'SpringBoot', 'AWS', 'Azure DevOps'],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Macmillan Learning',
    duration: 'Aug 2018 – Aug 2020',
    description: [
      'Developed V2 of an online learning platform, focusing on the professor’s portal.',
      'Integrated Elasticsearch to solve complex search issues, significantly improving performance.',
      'Led a team of developers using React, Nest.js, and various AWS services like Lambda and S3.',
    ],
    image: 'images/macmillan-learning.png',
    tech: ['React.js', 'Nest.js', 'Node.js', 'Elasticsearch', 'AWS Lambda', 'Cognito'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Wesco',
    duration: 'Aug 2016 – Aug 2018',
    description: [
      'Built the frontend for a major e-commerce platform using React, Next.js, and Redux.',
      'Ensured compliance with regional regulations for the Canadian market.',
      'Implemented backend services with Node.js, Express, and MongoDB.',
    ],
    image: 'images/wescoLogo.png',
    tech: ['React.js', 'Next.js', 'Redux', 'Node.js', 'MongoDB', 'AEM'],
  },
];

// Reusable component for a single project card
const ProjectCard: React.FC<ProjectCardProps> = ({ role, company, duration, description, image, link, tech, isLast }) => (
  // Adjusted padding for smaller screens (pl-8 for mobile, sm:pl-12 for tablets/larger mobiles, md:pl-12 for desktop)
  <div className="relative pl-8 py-6 group sm:pl-12 md:pl-12">
    {/* Timeline line */}
    {!isLast && <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-700 group-hover:bg-teal-400 transition-colors duration-300"></div>}
    
    {/* Timeline circle */}
    <div className="absolute top-6 left-4 transform -translate-x-1/2 w-4 h-4 bg-gray-800 border-2 border-gray-600 rounded-full group-hover:border-teal-400 transition-colors duration-300"></div>

    <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-teal-400/20 transition-all duration-300 transform hover:-translate-y-1">
      {/* Adjusted to stack on mobile (flex-col) and become a row on medium+ screens (md:flex-row) */}
      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Image Section - **Updated for consistent mobile height** */}
        {/* Takes full width on mobile, 1/3 on desktop. Height is now fixed `h-28` on mobile, `h-40` on desktop. */}
        <div className="w-full h-28 md:w-1/3 mb-4 md:mb-0 flex items-center justify-center bg-white/5 p-4 rounded-lg md:h-40">
          <img
            src={image}
            alt={`${company} logo`}
            className="max-h-full max-w-full object-contain" // Keep object-contain to fit logos
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src='https://placehold.co/600x400/1a1a1a/ffffff?text=Image+Not+Found';
            }}
          />
        </div>
        
        {/* Content Section - Takes full width on mobile, 2/3 on desktop */}
        <div className="w-full md:w-2/3">
          <p className="text-sm text-teal-400 mb-1">{duration}</p>
          {/* Adjusted font size for role: Smaller on mobile, then grows */}
          <h3 className="text-xl sm:text-2xl font-bold text-white">{role}</h3>
          {/* Adjusted font size for company: Smaller on mobile, then grows */}
          <p className="text-base sm:text-lg text-gray-400 mb-4">{company}</p>
          
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300 text-sm sm:text-base"> {/* Adjusted font size for list items */}
            {description.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          
          {/* Tech Stack - flex-wrap and gap are good */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((skill, index) => (
              <span key={index} className="bg-gray-700 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>
            ))}
          </div>

          {/* Optional Link */}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm sm:text-base"> {/* Adjusted font size for link */}
              <LinkIcon size={16} />
              <span>Visit Project</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

// Main WorkPage component (no changes needed here, keeping for completeness)
const WorkPage: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [readyToNavigate, setReadyToNavigate] = React.useState(false);
  const readyTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // This effect handles the scroll hijacking to allow the timeline to be scrolled
  // before the main page scrolls.
  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Helper function to check if at bottom (to avoid repetition)
    const isAtBottom = () => {
        const { scrollTop, scrollHeight, clientHeight } = container;
        const scrollBuffer = 5;
        return scrollTop + clientHeight >= scrollHeight - scrollBuffer;
    };
    // Helper function to check if at top (to avoid repetition)
    const isAtTop = () => {
        const { scrollTop } = container;
        return scrollTop <= 0;
    };

    const handleWheel = (e: WheelEvent) => {
      // If user scrolls up, away from the bottom, reset the navigation lock
      if (!isAtBottom()) { // Call the helper function
        setReadyToNavigate(false);
        if (readyTimeoutRef.current) {
          clearTimeout(readyTimeoutRef.current);
          readyTimeoutRef.current = null;
        }
      }

      // Standard page scroll when at the top and scrolling up
      if (isAtTop() && e.deltaY < 0) { // Call the helper function
        return;
      }

      // When at the bottom and scrolling down
      if (isAtBottom() && e.deltaY > 0) { // Call the helper function
        if (readyToNavigate) {
          // They've scrolled again after the delay, allow page navigation
          return;
        } else {
          // First time hitting the bottom. Prevent page scroll and set a timeout.
          e.stopPropagation();
          e.preventDefault();

          // Set a timeout to allow navigation on the next scroll event.
          if (!readyTimeoutRef.current) {
            readyTimeoutRef.current = setTimeout(() => {
              setReadyToNavigate(true);
              readyTimeoutRef.current = null;
            }, 300); // 300ms delay before allowing page scroll
          }
          return;
        }
      }

      // If we are not at the edges, or moving towards the center, just scroll the container.
      e.stopPropagation();
    };

    // Using passive: false for stopPropagation to work reliably in some browsers
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (readyTimeoutRef.current) {
        clearTimeout(readyTimeoutRef.current);
      }
    };
  }, [readyToNavigate]);


  return (
    <>
      {/* Style block to hide the scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      <section className="h-screen flex flex-col bg-[#1a1a1a] text-white">
        {/* Adjusted padding for smaller screens */}
        <div className="pt-4 px-4 sm:px-6 md:pt-12 md:px-12">
          {/* Adjusted text size for smaller screens */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-center">My Work Experience</h1>
          {/* Adjusted text size for smaller screens */}
          <p className="text-base sm:text-lg text-gray-400 mb-6 md:mb-8 text-center">
            A timeline of my professional journey and key projects.
          </p>
        </div>
        
        {/* This container holds the scrollable timeline */}
        {/* Adjusted horizontal padding for smaller screens */}
        <div ref={scrollContainerRef} className="flex-grow overflow-y-auto px-4 md:px-12 no-scrollbar">
           {/* max-w-4xl is good, mx-auto for centering, pb-32 for scroll area */}
           <div className="max-w-4xl mx-auto pb-32">
             <div className="relative">
               {workExperience.map((job, index) => (
                 <ProjectCard
                   key={index}
                   {...job}
                   isLast={index === workExperience.length - 1}
                 />
               ))}
             </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default WorkPage;