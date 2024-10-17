import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Head from "next/head";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="./VinoVivo_dark-isotipo-con-fondo-en-jpg.ico" />
        <meta
          name="Description"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repudiandae non quaerat ipsa at fugiat, dolorem itaque optio
            reprehenderit eius facilis perferendis fugit natus eveniet porro
            aliquam aspernatur illo officiis."
        ></meta>
      </Head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen divide-y divide-foreground">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
