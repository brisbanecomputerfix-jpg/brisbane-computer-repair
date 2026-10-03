"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "./data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } },
};

export default function BlogIndex() {
  return (
    <main className="flex-1 w-full px-8 pt-12 pb-32 max-w-6xl mx-auto">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
            <BookOpen className="w-3 h-3" /> IT REPAIR BLOG
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Tech Guides & Repair Insights
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Practical advice, troubleshooting steps, and deep dives into common computer issues. Learn how to maintain your devices and when it's time to bring them into our Brisbane repair center.
          </p>
        </motion.div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer block border border-white/10 hover:border-blue-500/50 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -z-10 group-hover:bg-blue-500/10 transition-colors" />
                
                <div className="flex items-center gap-4 text-xs font-mono text-white/40 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </main>
  );
}
