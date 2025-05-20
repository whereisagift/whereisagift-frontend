import { Heart } from "lucide-react";
import { FC } from "react";

import { Button } from "@/ui";

type LikeProps = unknown;

export const Like: FC<LikeProps> = () => {
  return (
    <Button
      variant="icon"
      className={`
        w-6
        h-6
				absolute 
				top-0 
				right-0
	      m-1 
	      transition-all 
	      duration-500 
	      hover:scale-110 
	      p-0`}
    >
      <Heart className="w-2/3 h-2/3 text-black" />
    </Button>
  );
};
