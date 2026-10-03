"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogPosts } from "../data";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="flex-1 w-full px-8 pt-12 pb-32 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl text-white mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-blue-400 hover:underline">← Back to Blog</Link>
      </main>
    );
  }

  return (
    <main className="flex-1 w-full px-8 pt-12 pb-32 max-w-4xl mx-auto">
      <motion.div initial="hidden" animate="visible" variants={itemVariants}>
        
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-white/40 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> BACK TO DIRECTORY
        </Link>

        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-blue-400 border-blue-400/30">
              <Calendar className="w-3 h-3" /> {post.date}
            </div>
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-amber-400 border-amber-400/30">
              <Clock className="w-3 h-3" /> {post.readTime}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-8">
            {post.title}
          </h1>

          <div 
            className="prose prose-invert prose-blue max-w-none text-white/70 leading-relaxed
                       prose-headings:text-white prose-headings:font-semibold
                       prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                       prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                       prose-p:mb-6 prose-strong:text-white prose-a:text-blue-400
                       prose-li:my-1 prose-ul:mb-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-white font-medium mb-3">SEO Target Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw, i) => (
                <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-white/40">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

      </motion.div>
    </main>
  );
}
