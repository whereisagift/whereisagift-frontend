import { useApolloClient } from "@apollo/client";
import { useCallback } from "react";

import type { TelegramUser } from "@/types";

import { useLoginMutation, useLogoutMutation, useMeQuery } from "../api";

export const useCurrentUser = () => {
  const client = useApolloClient();

  const [login, { loading: loadingLogin }] = useLoginMutation({
    updateQueries: {
      me: (prev, { mutationResult }) => {
        if (!mutationResult.data) {
          return prev;
        }
        return { data: mutationResult.data };
      },
    },
  });
  const [logout, { loading: loadingLogout }] = useLogoutMutation({
    onCompleted: () => {
      client.resetStore().catch((e) => {
        console.error("Ошибка при сбросе кеша:", e);
      });
    },
  });
  const { data, loading: loadingMe } = useMeQuery();

  const handlerLogin = useCallback(
    (user: TelegramUser) => {
      login({
        variables: {
          input: user,
        },
      });
    },
    [login],
  );

  return [
    handlerLogin,
    logout,
    {
      data,
      loading: loadingMe || loadingLogin || loadingLogout,
    },
  ] as const;
};
