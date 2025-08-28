"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Upload, Pencil, Calendar, BarChart2 } from "lucide-react";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Upload & AI Check", href: "/upload", icon: Upload },
  { name: "Create Post", href: "/create", icon: Pencil },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Analytics", href: "/analytics", icon: BarChart2 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-slate-800 p-6 flex flex-col shadow-lg">
      <h1 className="text-2xl font-bold mb-8">📌 AI Social</h1>

      <nav className="flex flex-col space-y-3">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 p-2 rounded-lg transition ${
                active
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-slate-700"
              }`}
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
