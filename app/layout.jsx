import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Home"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <nav className="w-32 h-screen bg-gray-800 text-white p-4 fixed">
            <h2 className="text-2xl mb-6">Menu</h2>
            <ul className="flex flex-col gap-4">
              <li><Link href="/">Página 1</Link></li>
              <li><Link href="/contato">Página 2</Link></li>
              <li><Link href="/ex1-2-3">Página 3</Link></li>
              <li><Link href="/ex4">Página 4</Link></li>
            </ul>
          </nav>

        <main className="ml-32 flex-1 p-8">
          {children}
        </main>
      </div>
      </body>
    </html>
  );
}
