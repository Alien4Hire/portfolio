'use client';

import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

// Defining the type for a single blog post
interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  tags: string[];
  slug: string; // For navigation to the full post
}

// Mock data for your blog posts, inspired by your resume
const blogPosts: BlogPost[] = [
  {
    title: 'Building a Smart IoT Paddle: From Concept to Reality',
    excerpt: 'A deep dive into the hardware and software challenges of creating a Bluetooth-connected smart pickleball paddle with real-time impact analysis using an Arduino Nano.',
    image: '/images/smart-paddle.jpg',
    date: 'July 10, 2025',
    tags: ['IoT', 'C++', 'Hardware', 'Engineering'],
    slug: '/blog/iot-smart-paddle',
  },
  {
    title: 'Microservices vs. Monolith: Lessons from Enterprise-Scale Applications',
    excerpt: 'Exploring the trade-offs between microservices and monolithic architectures, with real-world examples from my work at Optum and Macmillan Learning.',
    image: '/images/microservices.png',
    date: 'June 28, 2025',
    tags: ['Architecture', 'Backend', 'AWS', 'Node.js'],
    slug: '/blog/microservices-vs-monolith',
  },
  {
    title: 'How We Achieved 6 Million Views: A D2C Marketing Case Study',
    excerpt: 'The strategies behind the viral marketing campaigns for Rift Pickleball, from content creation and A/B testing to influencer outreach and community building.',
    image: '/images/viral.png',
    date: 'June 15, 2025',
    tags: ['Marketing', 'E-commerce', 'Social Media'],
    slug: '/blog/viral-marketing-case-study',
  },
  {
    title: 'Optimizing Database Queries with Drizzle ORM and Prisma',
    excerpt: 'A technical comparison of modern ORMs. Learn how we used Drizzle ORM to optimize performance for large-scale transactions in a financial platform.',
    image: '/images/database.jpg',
    date: 'May 30, 2025',
    tags: ['Database', 'ORM', 'TypeScript', 'Performance'],
    slug: '/blog/orm-comparison',
  },
];

const [featuredPost, ...otherPosts] = blogPosts;

// Reusable component for a single blog post card
const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-[#2a2a2a] rounded-xl shadow-lg hover:shadow-teal-400/20 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col group">
    <div className="overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src='https://placehold.co/600x400/1a1a1a/ffffff?text=Image+Error'; 
          }}
        />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center text-sm text-gray-400 mb-2">
        <Calendar size={14} className="mr-2" />
        <span>{post.date}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 flex-grow">{post.title}</h3>
      <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(tag => (
          <span key={tag} className="bg-gray-700 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <a href={post.slug} className="mt-auto inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-semibold">
        Read More <ArrowRight size={16} />
      </a>
    </div>
  </div>
);


// Main BlogPage component
const BlogPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white px-4 sm:px-8 md:px-12 py-16 sm:py-24 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">From the Blog</h1>
            <p className="text-lg text-gray-400">
              Thoughts on technology, engineering, and creative projects.
            </p>
        </div>
        
        {/* Featured Post */}
        <div className="mb-16 group">
          <a href={featuredPost.slug} className="block bg-[#2a2a2a] rounded-xl shadow-lg hover:shadow-teal-400/20 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src='https://placehold.co/1200x600/1a1a1a/ffffff?text=Image+Error'; 
                  }}
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <p className="text-sm font-semibold text-teal-400 mb-2">Featured Post</p>
                <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar size={14} className="mr-2" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto inline-flex items-center gap-2 text-teal-400 font-semibold text-lg">
                  Read Full Article <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Grid of Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
