import Link from "next/link";

export const Header = () => {
  return (
    <div className="p-2 m-2">
      <Link href="/">INDEX</Link>
      <Link href="/posts">POSTS</Link>
    </div>
  );
};
