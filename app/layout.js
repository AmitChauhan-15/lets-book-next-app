import Header from "./_components/Header";
import { ProjectName } from "./_helpers/constant";
import { connectToDb } from "./_lib/db";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserratFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: ProjectName,
};

export default function RootLayout({ children }) {
  connectToDb();
  return (
    <html lang="en">
      <body className={`${montserratFont.className} bg-gray-50  min-h-screen`}>
        <Header />
        <main className="relative max-w-7xl mx-auto h-[calc(100vh-70px)] py-8">{children}</main>
      </body>
    </html>
  );
}
