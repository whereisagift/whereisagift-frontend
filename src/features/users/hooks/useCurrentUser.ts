import { useAuth } from "./useAuth";

export const useCurrentUser = () => {
  const [data] = useAuth();
  return {
    user: data?.data,
    loading: data?.loading,
  };
};
