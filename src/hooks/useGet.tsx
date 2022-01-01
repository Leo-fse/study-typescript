import useSWRImmutable from "swr/immutable";

export const useGet = (url: string | null) => {
  const { data, error } = useSWRImmutable(url);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
