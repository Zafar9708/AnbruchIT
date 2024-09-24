import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "anbruchIT",
  description: "Generated by create next app",
  icons:{
    icon:['/favicon.ico?v=4']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
