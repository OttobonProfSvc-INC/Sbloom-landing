const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../SB/sbloom/src/components/home/CoreServices.tsx');

const newContent = `"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CoreServices() {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F7F4ED] leading-tight"
          >
            From being found<br />
            to being remembered.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#A8A39A] leading-relaxed max-w-2xl mx-auto"
          >
            We bring together the digital foundation, content and marketing your organization needs to stay visible, build trust and reach the right people.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-[#3A2B14] divide-y lg:divide-y-0 lg:divide-x divide-[#3A2B14]">
          
          {/* BUILD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative p-10 md:p-14 bg-[#0D0D0D] transition-colors hover:bg-[#050505] flex flex-col"
          >
            <div className="text-xs font-semibold tracking-[3px] text-[#D4AF5A] mb-12 uppercase">01 — BUILD</div>
            <h3 className="text-3xl font-bold mb-4 text-[#F7F4ED] leading-tight">Be found.<br />Build trust.</h3>
            
            <ul className="space-y-4 mb-10 text-[#F7F4ED] mt-8">
              <li className="flex items-center gap-3 font-medium transition-transform group-hover:translate-x-1"><div className="w-1.5 h-1.5 bg-[#D4AF5A]"></div>Google Business Profile</li>
              <li className="flex items-center gap-3 font-medium transition-transform group-hover:translate-x-1"><div className="w-1.5 h-1.5 bg-[#D4AF5A]"></div>SEO</li>
              <li className="flex items-center gap-3 font-medium transition-transform group-hover:translate-x-1"><div className="w-1.5 h-1.5 bg-[#D4AF5A]"></div>Website Design & Development</li>
            </ul>

            <p className="text-[#A8A39A] text-sm leading-relaxed mb-12 flex-grow">
              Build the digital foundation that helps your organization get discovered, understood and trusted online.
            </p>
            
            <Link
              href="/solutions/build"
              className="inline-flex items-center gap-3 font-semibold text-[#F7F4ED] group-hover:text-[#D4AF5A] transition-colors mt-auto uppercase text-xs tracking-widest pb-1 w-max"
            >
              <span className="border-b border-transparent group-hover:border-[#D4AF5A] pb-1 transition-colors">Explore Build</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* CREATE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative p-10 md:p-14 bg-[#0D0D0D] transition-colors hover:bg-[#050505] flex flex-col"
          >
            <div className="text-xs font-semibold tracking-[3px] text-[#D4AF5A] mb-12 uppercase">02 — CREATE</div>
            <h3 className="text-3xl font-bold mb-4 text-[#F7F4ED] leading-tight">Give your<br />organization a voice.</h3>
            
            <ul className="space-y-4 mb-10 text-[#F7F4ED] mt-8">
              <li className="flex items-center gap-3 font-medium transition-transform group-hover:translate-x-1"><div className="w-1.5 h-1.5 bg-[#D4AF5A]"></div>Social Media Management</li>
              <li className="flex items-center gap-3 font-medium transition-transform group-hover:translate-x-1"><div className="w-1.5 h-1.5 bg-[#D4AF5A]"></div>Social Media Posts</li>
              <li className="flex items-center gap-3 font-medium transition-transform group-hover:translate-x-1"><div className="w-1.5 h-1.5 bg-[#D4AF5A]"></div>Reels</li>
              <li className="flex items-center gap-3 font-medium transition-transform group-hover:translate-x-1"><div className="w-1.5 h-1.5 bg-[#D4AF5A]"></div>Digital Content</li>
            </ul>

            <p className="text-[#A8A39A] text-sm leading-relaxed mb-12 flex-grow">
              Create consistent content that communicates what you do and keeps your audience connected.
            </p>
            
            <Link
              href="/solutions/create"
              className="inline-flex items-center gap-3 font-semibold text-[#F7F4ED] group-hover:text-[#D4AF5A] transition-colors mt-auto uppercase text-xs tracking-widest pb-1 w-max"
            >
              <span className="border-b border-transparent group-hover:border-[#D4AF5A] pb-1 transition-colors">Explore Create</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* PROMOTE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative p-10 md:p-14 bg-[#0D0D0D] transition-colors hover:bg-[#050505] flex flex-col"
          >
            <div className="text-xs font-semibold tracking-[3px] text-[#D4AF5A] mb-12 uppercase">03 — PROMOTE</div>
            <h3 className="text-3xl font-bold mb-4 text-[#F7F4ED] leading-tight">Reach the<br />people who matter.</h3>
            
            <ul className="space-y-4 mb-10 text-[#F7F4ED] mt-8">
              <li className="flex items-center gap-3 font-medium transition-transform group-hover:translate-x-1"><div className="w-1.5 h-1.5 bg-[#D4AF5A]"></div>Meta Ads</li>
              <li className="flex items-center gap-3 font-medium transition-transform group-hover:translate-x-1"><div className="w-1.5 h-1.5 bg-[#D4AF5A]"></div>Google Ads</li>
              <li className="flex items-center gap-3 font-medium transition-transform group-hover:translate-x-1"><div className="w-1.5 h-1.5 bg-[#D4AF5A]"></div>Performance Marketing</li>
              <li className="flex items-center gap-3 font-medium transition-transform group-hover:translate-x-1"><div className="w-1.5 h-1.5 bg-[#D4AF5A]"></div>Campaign Management</li>
            </ul>

            <p className="text-[#A8A39A] text-sm leading-relaxed mb-12 flex-grow">
              Put your organization in front of relevant audiences through targeted digital advertising.
            </p>
            
            <Link
              href="/solutions/promote"
              className="inline-flex items-center gap-3 font-semibold text-[#F7F4ED] group-hover:text-[#D4AF5A] transition-colors mt-auto uppercase text-xs tracking-widest pb-1 w-max"
            >
              <span className="border-b border-transparent group-hover:border-[#D4AF5A] pb-1 transition-colors">Explore Promote</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#A8A39A] text-[0.85rem] font-medium tracking-[2px] uppercase">
            Built for <span className="text-[#F7F4ED]">Education</span> · <span className="text-[#F7F4ED]">Healthcare</span> · <span className="text-[#F7F4ED]">Consulting</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
`;

fs.writeFileSync(targetPath, newContent);
console.log('Update applied directly to SB/sbloom.');
