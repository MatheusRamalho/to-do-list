import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import '../styles/globals.css'

import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};


export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="w-full h-screen bg-gray-900 flex items-center justify-center flex-col">
                    <main className="w-full h-[calc(100vh-4rem)] p-4 flex items-center justify-center flex-col"> {children} </main>

                    <Footer />
                </div>
            </body>
        </html>
    )
}
