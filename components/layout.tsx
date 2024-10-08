import Image from "next/image";
import Link from "next/link";
interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-col w-full gap-4">
        <header className="container top-0 z-40 w-full mx-auto">
          <div className="border-b border-b-slate-200 py-4 w-full">
            <nav className="mx-4 px-6 flex items-center justify-between">
              <Link href="/">
                <div className="text-xl text-center w-full font-semibold">
                  <Image src="/logo.png" alt="" width={120} height={100} />
                </div>
              </Link>
              <Link href="/">
                <div className="text-xl text-center w-full font-semibold">
                  <img
                    src=""
                    alt=""
                    width={120}
                    height={100}
                  />
                </div>
              </Link>
            </nav>
          </div>
        </header>
        <div>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
