"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { persistor } from "@/store/store";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/authSlice";
import navigationRoutes from "@/utils/navigationRoutes";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();

  const dispatch = useDispatch();

  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: navigationRoutes.dashboard,
        icon: "ant-design:product-filled",
        isActive: pathname === navigationRoutes.dashboard,
      },
      {
        title: "Inventory Upload",
        url: navigationRoutes.inventoryUpload,
        icon: "mingcute:inventory-fill",
        isActive: pathname === navigationRoutes.inventoryUpload,
      },
      {
        title: "Vendors",
        url: navigationRoutes.vendors,
        icon: "mdi:marketplace",
        isActive: pathname === navigationRoutes.vendors,
      },
      {
        title: "Products",
        url: "/products/",
        icon: "ix:product",
        isOpen: false,
        items: [
          // {
          //   title: "Blood",
          //   url: navigationRoutes.products.blood,
          //   isActive: pathname === navigationRoutes.products.blood,
          // },
          // {
          //   title: "Oxygen",
          //   url: navigationRoutes.products.oxygen,
          //   isActive: pathname === navigationRoutes.products.oxygen,
          // },
          {
            title: "Consumables",
            url: navigationRoutes.products.consumables,
            isActive: pathname === navigationRoutes.products.consumables,
          },
          {
            title: "Equipments",
            url: navigationRoutes.products.equipments,
            isActive: pathname === navigationRoutes.products.equipments,
          },
        ],
      },
      {
        title: "Vendor Payments Terms",
        url: navigationRoutes.vendorPaymentsTerms,
        icon: "mdi:account-payment",
        isActive: pathname === navigationRoutes.vendorPaymentsTerms,
      },
      {
        title: "Vendor Payments",
        url: navigationRoutes.vendorPayments,
        icon: "mdi:account-payment",
        isActive: pathname === navigationRoutes.vendorPayments,
      },
      // {
      //   title: "QA Tracker",
      //   url: navigationRoutes.qaTracker,
      //   icon: "cib:pivotaltracker",
      //   isActive: pathname === navigationRoutes.qaTracker,
      // },
      // {
      //   title: "Vendor Invoice",
      //   url: navigationRoutes.vendorInvoice,
      //   icon: "iconamoon:invoice-fill",
      //   isActive: pathname === navigationRoutes.vendorInvoice,
      // },
      // {
      //   title: "Product Safety",
      //   url: navigationRoutes.productSafety,
      //   icon: "mingcute:safety-certificate-fill",
      //   isActive: pathname === navigationRoutes.productSafety,
      // },
      {
        title: "Failed Orders",
        url: navigationRoutes.failedOrders,
        icon: "icon-park-solid:folder-failed",
        isActive: pathname === navigationRoutes.failedOrders,
      },
      {
        title: "Vendor Declined Orders",
        url: navigationRoutes.vendorDeclinedOrders,
        icon: "mdi:archive-cancel",
        isActive: pathname === navigationRoutes.vendorDeclinedOrders,
      },
      {
        title: "Declined Quotations",
        url: navigationRoutes.declinedQuotations,
        icon: "lets-icons:cancel-fill",
        isActive: pathname === navigationRoutes.declinedQuotations,
      },
      {
        title: "Cancelled Orders",
        url: navigationRoutes.cancelledOrders,
        icon: "ic:baseline-cancel",
        isActive: pathname === navigationRoutes.cancelledOrders,
      }, 
    ],
  };

  const handleLogout = () => {
    localStorage.clear();
    persistor.purge();
    dispatch(logoutUser());
    router.push("/");
  };

  return (
    <Sidebar collapsible="icon" {...props} className="bg-lite-primary">
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser handleLogout={handleLogout} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
