import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Providers } from "@/app/providers";
import { ScrollToTop } from "@/components/shared/scroll-to-top";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://luxurybarbershop.com"),
  title: {
    default: "Luxury Barbershop",
    template: "%s | Luxury Barbershop",
  },
  description: "Experience refined artistry and timeless style at our luxury barbershop.",
  keywords: ["barbershop", "luxury grooming", "men's grooming", "premium haircut"],
  openGraph: {
    title: "Luxury Barbershop",
    description: "Premium grooming experience.",
    type: "website",
    locale: "en_US",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Barbershop",
    description: "A modern luxury barbershop experience for the contemporary gentleman.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        <Providers>
          <PageWrapper>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </PageWrapper>
        </Providers>
      </body>
    </html>
  );
}

