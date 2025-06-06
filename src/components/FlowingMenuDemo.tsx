"use client"

import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils.ts";

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

interface ThemeToggleProps {
  className?: string;
  isDark: boolean;
  onToggle: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    gsap.killTweensOf([marqueeRef.current, marqueeInnerRef.current]);
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );
    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    gsap.killTweensOf([marqueeRef.current, marqueeInnerRef.current]);
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );
    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  const singleMarqueeSet = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="
          text-neutral-900 dark:text-white
          uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0] whitespace-nowrap"
        >
          {text}
        </span>
        <div
          className="w-[200px] h-[7vh] my-[1em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ));
  }, [text, image]);

  return (
    <div
      className="
        flex-1 relative overflow-hidden text-center
        shadow-[0_-1px_0_0_rgba(255,255,255,0.2)]
        dark:shadow-[0_-1px_0_0_rgba(0,0,0,0.2)]
      "
      ref={itemRef}
    >
      <a
        className="
          flex items-center justify-center h-full relative cursor-pointer
          uppercase no-underline font-semibold
          text-white dark:text-neutral-900
          text-[4vh]
          hover:text-neutral-900 dark:hover:text-white
          focus:text-white dark:focus:text-neutral-900
          focus-visible:text-neutral-900 dark:focus-visible:text-white
        "
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className="
          absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none
          bg-white dark:bg-neutral-900
          translate-y-[101%]"
        ref={marqueeRef}
      >
        <div
          className="h-full w-full flex"
          ref={marqueeInnerRef}
        >
          <div className="flex items-center relative h-full w-max animate-marquee will-change-transform">
            <div className="flex items-center shrink-0">{singleMarqueeSet}</div>
            <div className="flex items-center shrink-0">{singleMarqueeSet}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="
      w-full h-full overflow-hidden
      bg-neutral-900 dark:bg-white
      transition-colors duration-300
      "
    >
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

function ThemeToggle({ className, isDark, onToggle }: ThemeToggleProps) {
  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        isDark 
          ? "bg-zinc-950 border border-zinc-800" 
          : "bg-white border border-zinc-200",
        className
      )}
      onClick={onToggle}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark 
              ? "transform translate-x-0 bg-zinc-800" 
              : "transform translate-x-8 bg-gray-200"
          )}
        >
          {isDark ? (
            <Moon 
              className="w-4 h-4 text-white" 
              strokeWidth={1.5}
            />
          ) : (
            <Sun 
              className="w-4 h-4 text-gray-700" 
              strokeWidth={1.5}
            />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark 
              ? "bg-transparent" 
              : "transform -translate-x-8"
          )}
        >
          {isDark ? (
            <Sun 
              className="w-4 h-4 text-gray-500" 
              strokeWidth={1.5}
            />
          ) : (
            <Moon 
              className="w-4 h-4 text-black" 
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const demoItems = [
  { link: '#amor', text: 'Amor', image: 'https://picsum.photos/seed/picsum1/600/400' },
  { link: '#carinho', text: 'Carinho', image: 'https://picsum.photos/seed/picsum2/600/400' },
  { link: '#amizade', text: 'Amizade', image: 'https://picsum.photos/seed/picsum3/600/400' },
  { link: '#afeto', text: 'Afeto', image: 'https://picsum.photos/seed/picsum4/600/400' }
];

const FlowingMenuDemo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marqueeScroll 25s linear infinite;
        }
      `}</style>

      <div className="flex flex-col w-full min-h-screen justify-center items-center bg-gray-100 dark:bg-neutral-950 p-4 transition-colors duration-300">
        <div className="mb-6">
          <ThemeToggle 
            isDark={isDarkMode} 
            onToggle={() => setIsDarkMode(!isDarkMode)} 
          />
        </div>

        <div
          className="relative shadow-xl rounded-lg overflow-hidden"
          style={{ height: '600px', width: '100%', maxWidth: '450px' }}
        >
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </>
  );
};

export default FlowingMenuDemo;
