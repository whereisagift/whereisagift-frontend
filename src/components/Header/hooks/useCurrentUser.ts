import { useCallback } from "react";

import type { TelegramUser } from "@/types";

import { useLoginMutation, useMeQuery } from "../api";

export const useCurrentUser = () => {
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
    {
      data,
      loading: loadingMe || loadingLogin,
    },
  ] as const;
};
