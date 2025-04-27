const PageHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-white select-none text-center z-5 text-sm absolute top-2.5 left-1/2 transform -translate-x-1/2 [word-spacing:5px]">
      {children}
    </h1>
  );
};

export default PageHeading;
