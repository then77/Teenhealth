import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import React, { useState } from "react"
import { Icon } from "@iconify/react";
import logo from "@/assets/icons/Vector-5.svg"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar } from "@radix-ui/react-avatar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: "fe:home",
  },
  {
    title: "Materi",
    url: "#",
    icon: "solar:book-broken",
  },
  {
    title: "Kuis",
    url: "#",
    icon: "material-symbols:quiz-outline",
  },
]

export function AppSidebar() {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <Sidebar className="p-3">
      <SidebarHeader className="gap-5 h-full">
        <div className="w-full h-min flex justify-between">
          <a href=".">
            <img src={logo} className="size-10" />
          </a>
          <a href="">
            <div className="size-10 transition-colors ease-in-out duration-300 hover:bg-black/5 rounded-full flex justify-center items-center">
              <Icon icon="solar:bell-linear" className="size-6 text-black/60" />
            </div>
          </a>
        </div>
        <SidebarContent>
          <SidebarGroup className="p-0">
            <SidebarGroupContent className="flex flex-col gap-5">
              {items.map((item, index) => (
                <div className={`w-full px-5 py-5 transition-al ease-in-out duration-300 corner rounded-md flex gap-5 items-center border-2 border-black/5 text-black/60 ${selected === index ? `hover:bg-[#2892D7]/20 border-[#2892D7] border-b-8 text-[#2892D7] bg-[#2892D7]/10` : `hover:bg-black/5 border-black/5 text-black/60}`}`}
                  onClick={() => handleSelect(index)}>
                  <Icon icon={item.icon} className="size-6" />
                  <p>{item.title}</p>
                </div>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
        <div className={`w-full px-5 py-5 transition-al ease-in-out duration-300 corner rounded-md flex gap-5 items-center border-2 hover:bg-black/5 border-black/5 text-black/60}`}>
                  <Avatar>
                    
                  </Avatar>
                  <p>User</p>
                </div>
        </SidebarFooter>
      </SidebarHeader>
    </Sidebar>
  )
}
