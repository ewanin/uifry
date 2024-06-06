import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "uifry",
  description: "Crafted with modern design principles and powered by React, Next.js, and Tailwind CSS, our website delivers a seamless user experience across devices. Through captivating visuals and clear messaging, we showcase the key features, advantages, and customizable options of our product/service. From the sleek header and engaging hero/banner section to the informative features, testimonials, and FAQ, visitors are guided through a journey that informs and inspires. With optimized image rendering and efficient content management using a data.json file, our website combines elegance with functionality, ensuring accessibility, performance, and scalability for our users.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
