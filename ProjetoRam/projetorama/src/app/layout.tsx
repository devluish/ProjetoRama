import Header from "./Header/header";
import Footer from "./Footer/Footer";
import type { Metadata } from "next";

// Definição do metadata
export const metadata: Metadata = {
  title: "Igreja Evangelica Rama",
};

// Função RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
