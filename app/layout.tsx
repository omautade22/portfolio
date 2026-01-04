import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Om Autade | Portfolio",
  description: "Software Engineer & GenAI Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased tracking-tight">
        <Navbar />
        {children}
      </body>
    </html>
  );
}