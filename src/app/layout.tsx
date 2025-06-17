import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/styles/globals.css"
import NavBar from "../components/general/NavBar";
import { ThemeProvider } from "next-themes";
import Tabs from "../components/effects/Tabs";


export const metadata: Metadata = {
    title: "Thushara Ramadas | Full Stack developer",
    description: "I've been developing websites for 2 years straight. Get in touch with me to know more.",

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className=" w-[90%] mx-auto bg-[#000]">
            <Tabs />
            {children}
            </body>
        </html>
    );
}