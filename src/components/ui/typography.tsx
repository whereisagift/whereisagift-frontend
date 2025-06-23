import { FC } from "react";

type TypographyProps = {
  children: string;
};

export const TypographyH3: FC<TypographyProps> = ({ children }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
      {children}
    </h3>
  );
};

export const TypographyH4: FC<TypographyProps> = ({ children }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};
