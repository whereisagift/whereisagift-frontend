import { Button, Card, Flex } from "antd";
import { DesireCards, Folders } from "app/desires/components";
import s from "./page.module.css";

const Desires = () => {
  return (
    <Flex className={s.container}>
      <div className={s.containerLeftNav}>
        <Flex vertical gap={20}>
          <Button type="primary">Создать новую папку</Button>
          <Button type="primary">Добавить желание</Button>
          <Folders />
        </Flex>
      </div>
      <DesireCards />
    </Flex>
  );
};
export default Desires;
