import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import StateProvider from "@/lib/StateProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Supabase ToDo NextJs",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StateProvider>
      <html lang="en">
        <body className="antialiased font-trebuchetMs flex flex-col min-h-screen">
          {children}
          <Footer />
          <Toaster position="top-center" />
        </body>
      </html>
    </StateProvider>
  );
}
