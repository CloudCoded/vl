"use client";
import { Input } from "@heroui/input";
import React from "react";
import { Card } from "@heroui/card";
import { User } from "lucide-react";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function HeaderSection() {
  const { isMobile } = useSidebar();
  const user = useSelector((state: RootState) => state?.auth?.userData);

  return (
    <div className="flex items-center gap-2 px-4 pt-4 w-full">
      {isMobile && (
        <>
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </>
      )}



      <Card className="w-full bg-[#FCFCFC] shadow-none   border-1 border-black/10 p-2">
        <div className="flex w-full justify-between items-center">
          <div>
            <Input
              className="bg-white"
              placeholder="Search..."
              radius="sm"
              size="lg"
              variant="bordered"
              classNames={{
                inputWrapper: "bg-white border-1 md:w-80",
              }}
            />
          </div>

          <div className="flex items-center gap-2">
            {!isMobile && (
              <div className="hidden lg:block">
                <p className="font-semibold text-sm">
                  Welcome, {user?.username}
                </p>
                <p className="text-xs">{user?.email}</p>
              </div>
            )}
            <div className="rounded-full bg-lite-primary w-10 h-10 flex justify-center items-center text-white">
              <User />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
