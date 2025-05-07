"use client";
import { Button } from "@heroui/button";
import React from "react";

import { AppTable } from "@/components/table/data-table";

import { Card, CardBody, CardHeader } from "@heroui/card";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import {
  AvailableBidsColumns,
  AvailableBidsItem,
} from "@/components/table/available-bids";

const initialFailedOrderDetailsData: AvailableBidsItem[] = [
  {
    id: "BOS1423",
    date: "01-08-2024",
    name: "Close Up bid",
    status: "Verified",
    type: "None",
  },
  {
    id: "BOS1424",
    date: "01-08-2024",
    name: "Close Up bid",
    status: "Verified",
    type: "None",
  },
  {
    id: "BOS1425",
    date: "01-08-2024",
    name: "Close Up bid",
    status: "Verified",
    type: "None",
  },
  {
    id: "BOS1426",
    date: "01-08-2024",
    name: "Close Up bid",
    status: "Verified",
    type: "None",
  },
  {
    id: "BOS1427",
    date: "01-08-2024",
    name: "Close Up bid",
    status: "Verified",
    type: "None",
  },
  {
    id: "BOS1428",
    date: "01-08-2024",
    name: "Close Up bid",
    status: "Verified",
    type: "None",
  },
];

export default function AvailableBidsComponent() {
  const pathname = usePathname();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleBackToFirstRoute = () => {
    const firstSegment = pathname.split("/")[1];
    router.push(`/${firstSegment}`);
  };

  return (
    <div className="flex flex-col gap-5 pt-10">
      <div className="flex items-center w-full gap-2">
        <Button variant="light" isIconOnly onPress={handleBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Breadcrumbs
          itemClasses={{
            separator: "px-2",
          }}
          separator="/"
        >
          <BreadcrumbItem onPress={handleBackToFirstRoute}>
            Failed Orders
          </BreadcrumbItem>
          <BreadcrumbItem onPress={handleBack}>Order Details</BreadcrumbItem>
          <BreadcrumbItem>Available Bids</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div>
        <Card>
          <CardHeader className="p-5 justify-between font-medium text-black text-xl">
            <span className="flex items-center gap-2">
              <span> Available Bids</span>
            </span>
          </CardHeader>
          <CardBody className="">
            <AppTable
              columns={AvailableBidsColumns}
              data={initialFailedOrderDetailsData}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
