import Providers from "./providers/providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <main className="flex items-center justify-center p-2">{children}</main>
    </Providers>
  );
};

export default RootLayout;
