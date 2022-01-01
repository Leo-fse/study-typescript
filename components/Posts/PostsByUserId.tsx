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
        <ul>
          {data.map(
            (
              item: { id: number; title: string; body: string },
              index: number
            ) => {
              return (
                <li key={item.id}>
                  <Link href={`/posts/${item.id}`}>
                    <a className="block group">
                      <h1 className="text-xl font-bold group-hover:text-blue-500">
                        {item.title}
                      </h1>
                      <p className="text-lg text-gray-500 group-hover:text-blue-300">
                        {item.body}
                      </p>
                    </a>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      )}
    </div>
  );
};
