import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ExitModal } from "@/components/modals/exit-modal";
import { PracticaModal } from "@/components/modals/practica-modal";
import { CorazonesModal } from "@/components/modals/corazones-modal";

const font = Nunito({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          <CorazonesModal />
          <PracticaModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
