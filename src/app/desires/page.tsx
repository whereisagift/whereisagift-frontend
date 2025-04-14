import { Button, Flex } from "antd";
import { DesireCards, Folders } from "app/desires/components";
import s from "./page.module.css";
import { UpOutlined } from "@ant-design/icons";

const Desires = () => {
  return (
    <Flex className={s.container}>
      <Flex vertical gap={20} className={s.containerLeftNav}>
        <Button type="primary">Создать новую папку</Button>
        <Button type="primary">Добавить желание</Button>
        <Folders />
        <Button className={s.buttonToUp} icon={<UpOutlined size={70} />} />
      </Flex>
      <DesireCards />
    </Flex>
  );
};
export default Desires;
