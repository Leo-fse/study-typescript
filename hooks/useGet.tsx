import useSWR from "swr";

export const useGet = (url: string | null) => {
  const { data, error } = useSWR(url);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
