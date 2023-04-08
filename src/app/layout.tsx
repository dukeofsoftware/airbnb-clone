import { Navbar } from "@/components/global";
import { Providers, ToasterProvider } from "@/components/providers";
import { LoginModal, RegisterModal } from "@/components/ui";
import getCurrentUser from "@/lib/actions/getCurrentUser";
import "@/styles/globals.css";

import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="tr">
      <body
        className={
          `${process.env.DEVELOPMENT === "true" && "debug-screens"}` +
          font.className
        }
      >
        <Providers>
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
