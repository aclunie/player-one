import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Player One",
  description: "Player One back-end service.",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
      <SidebarProvider>
      <AppSidebar />

      <main>
      <SidebarTrigger />
      {children}
      </main>
      
     </SidebarProvider>
     </body>
    </html>
  )
}