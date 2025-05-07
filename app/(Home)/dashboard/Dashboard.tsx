"use client";
import React from "react";
import DashboardCard from "./DashboardCard";
import navigationRoutes from "@/utils/navigationRoutes";
import { Card, CardBody } from "@heroui/card";
import NigeriaMap from "@/components/map";

const topRowStatsClassNames =
  "w-full h-[140px] rounded-[10px] border border-solid border-[#b703031a] relative overflow-hidden";

export default function Dashboard() {
  const dashboardData = [
    {
      title: "Inventory Upload",
      value: "12",
      icon: "mingcute:inventory-fill",
      bgColor:
        "text-white [background:linear-gradient(180deg,rgba(206,135,98,1)_0%,rgba(167,111,81,1)_100%)]",
      iconColor: "text-[#A04A1D]",
      url: navigationRoutes.inventoryUpload,
    },
    {
      title: "All Vendors",
      value: "54",
      icon: "mdi:marketplace",
      bgColor:
        "text-white [background:linear-gradient(180deg,rgba(201,192,137,1)_0%,rgba(171,163,109,1)_100%)]",
      iconColor: "text-[#9C8F38]",
      url: navigationRoutes.vendors,
    },
    {
      title: "All Failed Orders",
      value: "2",
      icon: "icon-park-solid:folder-failed",
      bgColor:
        "text-white [background:linear-gradient(180deg,rgba(142,202,204,1)_0%,rgba(34,138,129,1)_100%)]",
      iconColor: "text-[#2D9089]",
      url: navigationRoutes.failedOrders,
    },
    {
      title: "All Vendor Declined Orders",
      value: "4",
      icon: "mdi:archive-cancel",
      bgColor:
        "text-white [background:linear-gradient(180deg,rgba(111,151,134,1)_0%,rgba(75,116,99,1)_100%)]",
      iconColor: "text-[#55796A]",
      url: navigationRoutes.vendorDeclinedOrders,
    },
    {
      title: "All Cancelled Orders",
      value: "6",
      icon: "ic:baseline-cancel",
      bgColor:
        "text-white [background:linear-gradient(180deg,rgba(161,151,118,1)_0%,rgba(133,122,86,1)_100%)]",
      iconColor: "text-[#6D654A]",
      url: navigationRoutes.cancelledOrders,
    },
    {
      title: "All Declined Quotations",
      value: "4",
      icon: "lets-icons:cancel-fill",
      bgColor:
        " [background:linear-gradient(180deg,rgba(246,237,188,1)_0%,rgba(222,209,139,1)_100%)]",
      iconColor: "text-[#9A8827]",
      url: navigationRoutes.declinedQuotations,
    },
  ];

  let mapData = [];
  mapData.push({
    latitude: 6.465422,
    longitude: 3.406448,
    address: "Victoria Island, Lagos, Nigeria",
  });
  mapData.push({
    latitude: 6.524,
    longitude: 3.3792,
    address: "Ikeja, Lagos, Nigeria",
  });
  mapData.push({
    latitude: 6.458,
    longitude: 3.3903,
    address: "Lagos Island, Lagos, Nigeria",
  });
  mapData.push({
    latitude: 6.6018,
    longitude: 3.3515,
    address: "Surulere, Lagos, Nigeria",
  });
  mapData.push({
    latitude: 6.548,
    longitude: 3.3841,
    address: "Yaba, Lagos, Nigeria",
  });

  return (
    <div className="space-y-5 pt-5">
      <h1 className="text-3xl font-medium ">Dashboard</h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 gap-x-20">
        {dashboardData.map((item) => (
          <DashboardCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            iconColor={item.iconColor}
            topRowStatsClassNames={topRowStatsClassNames}
            bgColor={item.bgColor}
            url={item.url}
          />
        ))}
      </div>

      <div>
        <section className="w-full h-full bg-white overflow-y-auto">
          <Card className="w-full rounded-[10px] border border-solid border-[#0000001a] bg-[#fbfbfb]">
            <CardBody className="p-6 h-96">
              <NigeriaMap mapData={mapData} />
            </CardBody>
          </Card>
        </section>
      </div>
    </div>
  );
}
