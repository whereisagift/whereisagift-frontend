import dayjs from "dayjs";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import { type FC } from "react";

import { type Desire } from "../DesireCards";

type ButtonContentProps = {
  desire?: Desire;
};

export const ButtonContent: FC<ButtonContentProps> = ({ desire }) => {
  if (desire?.booking) {
    return (
      <div className="flex items-center gap-2">
        <UserIcon className="w-4 h-4" />
        {desire.booking.reservist.nickname}
      </div>
    );
  }
  if (desire?.orderDate) {
    return (
      <div className="flex items-center gap-2">
        <ShoppingCartIcon className="w-4 h-4" />
        {dayjs(desire.orderDate).format("DD.MM")}
      </div>
    );
  }
  return <>Забронировать</>;
};
