import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import background from "~/assets/background.webp";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
});

export const metadata: Metadata = {
  title: "sndrnz",
  description: "that's me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} bg-black text-white`}>
        {children}
        <div className="fixed inset-0 -z-10">
          <Image
            src={background}
            alt="background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </body>
    </html>
  );
}
