const fs = require('fs');
const path = require('path');

const processPath = path.join(__dirname, '../SB/sbloom/src/components/home/Process.tsx');
const processCode = `"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "UNDERSTAND",
      desc: "Understand the business, audience, goals and current digital presence."
    },
    {
      num: "02",
      title: "PLAN",
      desc: "Define the right priorities, strategy and digital growth direction."
    },
    {
      num: "03",
      title: "ASSEMBLE",
      desc: "Bring together the right S-Bloom team and specialized talent for the work required."
    },
    {
      num: "04",
      title: "EXECUTE",
      desc: "Build, create and promote through coordinated digital execution."
    },
    {
      num: "05",
      title: "GROW",
      desc: "Measure what is working, improve continuously and support long-term digital growth."
    }
  ];

  return (
    <section className="py-32 bg-[#050505] border-t border-[#3A2B14]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-[3px] text-[#D4AF5A] mb-8 uppercase block">HOW WE WORK</span>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-[#F7F4ED] leading-tight">
              From understanding your business to helping it grow.
            </h2>
            <p className="text-lg text-[#A8A39A] leading-relaxed">
              We start by understanding your goals and digital presence, plan the right approach, bring together the right expertise, execute the work and continue improving as your business grows.
            </p>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-between relative mb-16">
          <div className="absolute top-[15px] left-0 right-0 h-[1px] bg-[#3A2B14] z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative z-10 w-[18%] pt-10"
            >
              <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#050505] border border-[#D4AF5A] transition-all duration-300 group-hover:bg-[#D4AF5A] group-hover:shadow-[0_0_10px_rgba(212,175,90,0.4)] z-20" />
              
              <div className="absolute top-[15px] left-1/2 w-0 h-[1px] bg-[#D4AF5A] transition-all duration-500 group-hover:w-full z-10" />

              <div className="text-xs font-semibold tracking-[2px] text-[#D4AF5A] mb-3 text-center">{step.num}</div>
              <h3 className="text-[1.1rem] font-bold text-[#F7F4ED] mb-3 text-center">{step.title}</h3>
              <p className="text-[0.85rem] text-[#A8A39A] group-hover:text-[#dcdcdc] transition-colors leading-relaxed text-center">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col gap-10 relative mb-16 pl-6">
          <div className="absolute top-0 bottom-0 left-[30px] w-[1px] bg-[#3A2B14]" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative pl-10"
            >
              <div className="absolute left-[-4px] top-[6px] w-2 h-2 rounded-full bg-[#050505] border border-[#D4AF5A] transition-all duration-300 group-hover:bg-[#D4AF5A] group-hover:shadow-[0_0_10px_rgba(212,175,90,0.4)] z-20" />
              
              <div className="absolute left-[0px] top-[6px] w-[1px] h-0 bg-[#D4AF5A] transition-all duration-500 group-hover:h-[calc(100%+40px)] z-10" />

              <div className="text-xs font-semibold tracking-[2px] text-[#D4AF5A] mb-2">{step.num}</div>
              <h3 className="text-lg font-bold text-[#F7F4ED] mb-2">{step.title}</h3>
              <p className="text-sm text-[#A8A39A] group-hover:text-[#dcdcdc] transition-colors leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(processPath, processCode);
console.log('Next.js Process text updated.');
