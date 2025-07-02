"use client";

import { ApolloNextAppProvider } from "@apollo/client-integration-nextjs";
import { type FC, type PropsWithChildren } from "react";

import { getApolloClient } from "@/lib";

export const ApolloProvider: FC<PropsWithChildren> = ({ children }) => (
  <ApolloNextAppProvider makeClient={getApolloClient}>
    {children}
  </ApolloNextAppProvider>
);
