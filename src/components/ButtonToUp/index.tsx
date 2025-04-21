import { Button } from "antd";
import s from "./index.module.css";
import { ArrowUpOutlined } from "@ant-design/icons";

export const ButtonToUp = () => {
  return (
    <Button className={s.button_to_up} icon={<ArrowUpOutlined size={150} />} />
  );
};
