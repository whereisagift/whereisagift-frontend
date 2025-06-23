import { Heart } from "lucide-react";
import { FC } from "react";

import { Button } from "@/ui";

type LikeProps = unknown;

export const Like: FC<LikeProps> = () => {
  return (
    <Button
      variant="icon"
      className={`
        h-6
				absolute 
	      p-0`}
    >
      <Heart className="w-2/3 h-2/3 text-black" />
    </Button>
  );
};
