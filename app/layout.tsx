import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Portifólio | João Pedro Coutinho",
  description: "Portifólio profissional de João Pedro Coutinho",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen w-full flex flex-col justify-center items-center">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
