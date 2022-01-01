export const Layout = (props: any) => {
  return (
    <div className="flex flex-col items-center mx-auto px-2 min-h-screen max-w-2xl">
      {props.children}
    </div>
  );
};
