import { Sidebar } from "./components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "AI Social Media Assistant",
  description: "AI-powered social media post manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-slate-900 text-white">
        {/* Sidebar (persistent navigation) */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}