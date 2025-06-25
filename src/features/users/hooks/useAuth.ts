import { useApolloClient } from "@apollo/client";
import { useCallback } from "react";

import type { TelegramUser } from "@/types";

import {
  CurrentUserFragmentDoc,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} from "../api";

export const useAuth = () => {
  const client = useApolloClient();

  const [login, { loading: loadingLogin }] = useLoginMutation({
    update: (cache, { data }) =>
      cache.modify({
        fields: {
          me: (prevMe) => {
            const currentMe = data?.login;
            const meRef = cache.writeFragment({
              data: currentMe,
              fragment: CurrentUserFragmentDoc,
            });

            console.debug(prevMe, currentMe, meRef);

            return meRef ?? prevMe;
          },
        },
      }),
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
    {
      data,
      loading: loadingMe || loadingLogin || loadingLogout,
    },
    handlerLogin,
    logout,
  ] as const;
};
