import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useQuery } from "@tanstack/react-query";
import Hydration from "./contexts/hydration";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sangkap MPC",
  description: "This is website for sangkap MPC members.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const {data}=useQuery({
  //   queryKey:['users'], 
  //   queryFn:()=>getUsers(),
  // })


  return (
    <html lang="en">
      <body className={inter.className}>
      <Hydration />
        {children}
        </body>
    </html>
  );
}
