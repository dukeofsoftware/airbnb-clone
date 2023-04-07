import { Navbar } from "@/components/global";
import { Providers, ToasterProvider } from "@/components/providers";
import { RegisterModal } from "@/components/ui";
import "@/styles/globals.css";

import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={
          `${process.env.DEVELOPMENT === "true" && "debug-screens"}` +
          font.className
        }
      >
        <Providers>
          <RegisterModal title="Hello World" isOpen actionLabel="Submit" />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
