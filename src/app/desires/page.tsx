import { Flex } from "antd";

import { ButtonToUp } from "@/components/ButtonToUp";

import { Desktop, Mobile } from "./components";

const Desires = () => {
  return (
    <Flex>
      <Mobile />
      <Desktop />
      <ButtonToUp />
    </Flex>
  );
};
export default Desires;
