import { type FC, type PropsWithChildren } from "react";

import { ApolloProvider } from "./ApolloProvider";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ApolloProvider>{children}</ApolloProvider>
);
