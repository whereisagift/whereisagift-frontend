import { HeartOutlined } from "@ant-design/icons";
import { Button } from "antd";

import s from "./index.module.css";

type LikeProps = unknown;

export const Like: React.FC<LikeProps> = () => {
  return (
    <Button shape="circle" type="link" className={s.heart_icon_button}>
      <HeartOutlined className={s.heart_icon} />
    </Button>
  );
};
