import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "TOP" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
  { href: "/tweet", label: "TWEET" },
];

export const Header = () => {
  return (
    <header className="w-full h-28 border-b border-gray-500 flex justify-center items-center">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className="inline-block px-2 py-3 text-lg hover:text-blue-600">
              {item.label}
            </a>
          </Link>
        );
      })}
    </header>
  );
};
