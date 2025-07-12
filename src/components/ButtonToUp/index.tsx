"use client";
import { ArrowUp } from "lucide-react";
import { type FC, useEffect, useRef, useState } from "react";

import { Button } from "@/ui";
import { cn } from "@/utils";

export const ButtonToUp: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // При любом скролле — мгновенно убираем видимость
      setIsVisible(false);

      // Сброс старого таймера
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Ставим новый таймер
      scrollTimeout.current = setTimeout(() => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        }
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        `
        fixed 
        left-[2vw] 
        bottom-[4vw] 
        w-[calc(var(--main-header-size)+1vw)] h-[calc(var(--main-header-size)+1vw)]
        md:min-w-[calc(var(--main-header-size)+1vw)]
        md:min-h-[calc(var(--main-header-size)+1vw)]
        max-md:min-w-[calc(var(--main-header-size)+2vw)]
        max-md:min-h-[calc(var(--main-header-size)+2vw)]
        max-md:bottom-[calc(4vw+var(--secondary-header-size))]
        p-0`,
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90 pointer-events-none",
      )}
      variant="icon"
    >
      <ArrowUp className="w-1/2 h-1/2 text-black" />
    </Button>
  );
};
