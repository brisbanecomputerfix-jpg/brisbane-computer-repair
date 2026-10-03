"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
  href?: string;
  className?: string;
  variants?: any;
}

export default function BentoCard({ title, description, icon: Icon, tags = [], href, className = "", variants }: BentoCardProps) {
  const CardContent = (
    <motion.div variants={variants} className={`glass-panel rounded-3xl p-8 hover:bg-white/[0.08] transition-colors cursor-pointer group ${className}`}>
      <Icon className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/50 text-sm mb-6">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="glass-pill px-2.5 py-1 text-[10px] font-mono uppercase">
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href} className="block w-full">{CardContent}</Link>;
  }

  return CardContent;
}
