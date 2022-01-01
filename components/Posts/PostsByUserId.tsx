import Link from "next/link";
import { useGet } from "../../hooks/useGet";

export const PostByUserId = (props: { id: number }) => {
  const postByUserUrl = props.id
    ? `${process.env.NEXT_PUBLIC_API_URL}/posts?userId=${props.id}`
    : null;
  const { data, error, isLoading, isEmpty } = useGet(postByUserUrl);
  console.log(postByUserUrl);

  return (
    <div>
      {error ? (
        <div>エラーが発生してデータが取得できていません</div>
      ) : isEmpty ? (
        <div>取得データが0件でした</div>
      ) : isLoading ? (
        <div>ローディング中</div>
      ) : (
        data.map(
          (
            item: { id: number; title: string; body: string },
            index: number
          ) => {
            return (
              <div key={item.id}>
                <ol>
                  <li>
                    <Link href={`/posts/${item.id}`}>{`${index + 1}. ${
                      item.title
                    }`}</Link>
                  </li>
                </ol>
              </div>
            );
          }
        )
      )}
    </div>
  );
};
