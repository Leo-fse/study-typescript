import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "TOP" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
  { href: "/ssrcomments", label: "SSRComments" },
  { href: "/testReducer", label: "testReducer" },
  // { href: "/tweet", label: "TWEET" },
];

export const Header = () => {
  return (
    <header className="flex justify-center items-center border-b w-full h-24 mb-4">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className="inline-block px-6 py-2 text-xl hover:text-blue-500 focus:text-blue-500 active:text-blue-500">
              {item.label}
            </a>
          </Link>
        );
      })}
    </header>
  );
};
