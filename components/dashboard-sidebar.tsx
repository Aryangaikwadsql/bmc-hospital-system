"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ClipboardList, FileText, Home, PlusCircle, Search, Users } from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Register Patient",
    href: "/dashboard/register",
    icon: PlusCircle,
  },
  {
    title: "Search Patient",
    href: "/dashboard/search",
    icon: Search,
  },
  {
    title: "Patient Records",
    href: "/dashboard/records",
    icon: ClipboardList,
  },
  {
    title: "Generate Slip",
    href: "/dashboard/generate-slip",
    icon: FileText,
  },
  {
    title: "Manage Staff",
    href: "/dashboard/staff",
    icon: Users,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-muted/40 hidden md:block">
      <div className="flex flex-col gap-2 p-4">
        <p className="text-sm font-medium text-muted-foreground mb-2">Main Menu</p>
        <nav className="grid gap-1">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground",
                pathname === item.href ? "bg-muted text-foreground" : "text-muted-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

