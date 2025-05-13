import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import React from "react";

import { type Desire } from "../../DesireCards";

type ButtonContentProps = {
  desire?: Desire;
};
export const ButtonContent: React.FC<ButtonContentProps> = ({ desire }) => {
  if (desire?.booking) {
    return (
      <>
        <UserOutlined /> {desire.booking.reservist.nickname}
      </>
    );
  }
  if (desire?.orderDate) {
    return (
      <>
        <ShoppingCartOutlined /> {dayjs(desire.orderDate).format("DD.MM")}
      </>
    );
  }
  return <>Забронировать</>;
};
