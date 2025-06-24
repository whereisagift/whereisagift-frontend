import { type FC } from "react";

import { cn } from "@/utils";

type TypographyProps = {
  children: string;
  className?: string;
};

export const TypographyH1: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        `scroll-m-20 
        text-center 
        text-4xl 
        font-extrabold 
        tracking-tight 
        text-balance`,
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const TypographyH3: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h3
      className={cn(
        `scroll-m-20 
	    text-2xl 
	    font-semibold 
	    tracking-tight 
	    mb-4`,
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const TypographyH4: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h4
      className={cn(
        `scroll-m-20 
	    text-xl 
	    font-semibold 
	    tracking-tight`,
        className,
      )}
    >
      {children}
    </h4>
  );
};
