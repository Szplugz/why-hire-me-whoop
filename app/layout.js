import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hire Me!",
  description: "Portfolio for Whoop application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xhw5akq.css" />
      </head>
      <body className="font-proxima-nova">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
