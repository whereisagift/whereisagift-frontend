import { useCallback } from "react";

import type { TelegramUser } from "@/types";

import { useLoginMutation, useLogoutMutation, useMeQuery } from "../api";

export const useAuth = () => {
  const { data, loading: loadingMe } = useMeQuery();
  const [login, { loading: loadingLogin }] = useLoginMutation({
    onCompleted() {
      window.location.reload();
    },
  });
  const [logout, { loading: loadingLogout }] = useLogoutMutation({
    onCompleted() {
      window.location.reload();
    },
  });

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
    {
      data,
      loading: loadingMe || loadingLogin || loadingLogout,
    },
    handlerLogin,
    logout,
  ] as const;
};
