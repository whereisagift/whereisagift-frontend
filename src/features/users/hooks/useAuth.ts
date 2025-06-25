import { useCallback } from "react";

import type { TelegramUser } from "@/types";

import {
  CurrentUserFragmentDoc,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} from "../api";

export const useAuth = () => {
  const [login, { loading: loadingLogin }] = useLoginMutation({
    update: (cache, { data }) => {
      console.log(data);
      cache.modify({
        fields: {
          me: (prevMe) => {
            const currentMe = data?.login;
            const meRef = cache.writeFragment({
              data: currentMe,
              fragment: CurrentUserFragmentDoc,
            });

            console.log(prevMe, currentMe, meRef);

            return meRef ?? prevMe;
          },
        },
      });
    },
  });
  const [logout, { loading: loadingLogout, client }] = useLogoutMutation({
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
