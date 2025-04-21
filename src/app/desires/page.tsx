import { Mobile, Desktop } from "app/desires/components";
import { ButtonToUp } from "@/components/ButtonToUp";
import { Flex } from "antd";

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
