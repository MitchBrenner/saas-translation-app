import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProviders from "@/components/ClientProvders";


export const metadata: Metadata = {
  title: "SAAS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProviders>
      <html lang="en">
        <body className='flex flex-col min-h-screen'>
          <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            
          </ThemeProvider>
          
        </body>
      </html>
    </ClientProviders>
  );
}
