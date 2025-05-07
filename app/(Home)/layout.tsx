"use client";
import { AppSidebar } from "@/components/app-sidebar";
import HeaderSection from "@/components/header";
import PageLoadPlaceholder from "@/components/PageLoadPlaceholder";
import PageTransition from "@/components/PageTransition";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useSelector((state: RootState) => state?.auth?.userData);

  if (!user) {
    return <PageLoadPlaceholder />;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 ">
          <HeaderSection />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4">
          <PageTransition> {children} </PageTransition>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
