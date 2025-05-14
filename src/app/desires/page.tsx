import { ButtonToUp } from "@/components/ButtonToUp";

import { Desktop, Mobile } from "./components";

const Desires = () => {
  return (
    <div className="flex flex-col">
      <Mobile />
      <Desktop />
      <ButtonToUp />
    </div>
  );
};

export default Desires;
