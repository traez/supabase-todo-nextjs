import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import StateProvider from "@/lib/StateProvider";

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
        <body className="antialiased">
          {children}
          <Toaster position="top-center" />
        </body>
      </html>
    </StateProvider>
  );
}
