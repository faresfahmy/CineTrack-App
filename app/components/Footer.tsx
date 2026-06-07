"use client";
import MotionItem from "./default/MotionItem";
export default function Footer() {
    let year = new Date().getFullYear()
  return (
    <MotionItem 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, duration:{ transition: 0.5 } }}  
      className="bg-[#0e1822] text-zinc-400 py-4 border-t border-zinc-900"
    >
      <div className="container mx-auto text-center">
        <p>© {year}   <span className="text-rose-700">CineTrack</span>. All rights reserved.</p>
      </div>
    </MotionItem>
  );
}

