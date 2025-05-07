"use client";

import * as React from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex justify-around relative">
        <div className="flex justify-center">
          <Image
            src="/logo-white.png"
            alt="Auth Image"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
            priority
            className="w-16 h-auto size-4"
            quality={100}
          />
        </div>
        <div className="absolute top-3.5 -right-5 z-40">
          <SidebarTrigger />
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
