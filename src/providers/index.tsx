import { AntdRegistry } from "@ant-design/nextjs-registry";
import { type FC, type PropsWithChildren } from "react";

import { AntdConfigProvider } from "./AntdConfigProvider";
import { ApolloProvider } from "./ApolloProvider";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <AntdRegistry>
    <AntdConfigProvider>
      <ApolloProvider>{children}</ApolloProvider>
    </AntdConfigProvider>
  </AntdRegistry>
);
