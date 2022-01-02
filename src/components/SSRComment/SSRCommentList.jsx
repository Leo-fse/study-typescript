import Link from "next/link";
import { useFetchArray } from "../../hooks/useFetchArray";

export const SSRCommentList = () => {
  const { data } = useFetchArray(`${process.env.NEXT_PUBLIC_API_URL}/comments`);
  return (
    <ul className="space-y-2">
      {data.map((item, index) => {
        return (
          <li className="border-b pb-2" key={item.id}>
            <Link href={`/ssrcomments/${item.id}`}>
              <a>
                {index + 1}. {item.body}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
