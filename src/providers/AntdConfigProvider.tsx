import { ConfigProvider } from "antd";
import { type FC, type PropsWithChildren } from "react";

import { poiret } from "fonts";

export const AntdConfigProvider: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider
    theme={{
      token: {
        ...poiret.style,
      },
    }}
  >
    {children}
  </ConfigProvider>
);
