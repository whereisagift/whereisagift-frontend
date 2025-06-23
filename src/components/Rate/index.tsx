import { Star } from "lucide-react";
import type React from "react";
import { useState } from "react";

import { cn } from "@/utils";

interface RateProps {
  /** Current rating value */
  value?: number;
  /** Maximum number of stars */
  max?: number;
  /** If true, disables interaction */
  readOnly?: boolean;
  /** Callback when rating changes */
  onChange?: (value: number) => void;
  /** Additional container classes */
  className?: string;
}

export const Rate: React.FC<RateProps> = ({
  value = 0,
  max = 5,
  readOnly = false,
  onChange,
  className,
}) => {
  const [hoverValue, setHoverValue] = useState(0);
  const [selectedValue, setSelectedValue] = useState(value);
  const displayValue = hoverValue || selectedValue;

  const handleMouseEnter = (index: number) => {
    if (readOnly) return;
    setHoverValue(index);
  };
  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverValue(0);
  };
  const handleClick = (index: number) => {
    if (readOnly) return;
    if (onChange) onChange(index);
    setSelectedValue(index);
  };

  return (
    <div
      className={cn("flex items-center", className)}
      role="radiogroup"
      aria-label="Rating"
    >
      {Array.from({ length: max }, (_, i) => {
        const index = i + 1;
        const filled = displayValue >= index;
        return (
          <button
            key={index}
            type="button"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            disabled={readOnly}
            role="radio"
            aria-checked={filled}
            className="p-1 focus:outline-none"
          >
            <Star
              className={cn("h-6 w-6")}
              fill={filled ? "#FFE13F" : "none"}
              stroke={filled ? "#6F47D7" : "#D1D5DB"}
              strokeWidth={1}
            />
          </button>
        );
      })}
    </div>
  );
};
