"use client";

import { LogOut } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavUser({ handleLogout }: { handleLogout: () => void }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex items-center"
          onClick={handleLogout}
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <LogOut className="text-white" />
          </Avatar>
          <div className="text-white font-bold text-base">Log out</div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
