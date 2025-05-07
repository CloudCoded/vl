"use client";

import React, { useState } from "react";

import { AppTable } from "@/components/table/data-table";

import { Card, CardBody, CardHeader } from "@heroui/card";
import {
  VendorDeclinedOrdersColumns,
  VendorDeclinedOrdersItem,
} from "@/components/table/vendor-declined-orders-column";
import { usePathname, useRouter } from "next/navigation";

const initialVendorDeclinedOrdersData: VendorDeclinedOrdersItem[] = [
  {
    id: 1,
    date: "01-08-2024",
    name: "Equinox",
    product: "Stockbank",
    reason:
      "This order failed due to a lack of sufficient balance on the User’s wallet.",
    hospital_name: "Alifort Hospital",
    last_update: "05-09-2024",
  },
  {
    id: 2,
    date: "01-08-2024",
    name: "Alifort Hospital",
    product: "Quip",
    reason:
      "This order failed due to a lack of sufficient balance on the User’s wallet.",
    hospital_name: "Alifort Hospital",
    last_update: "05-09-2024",
  },
  {
    id: 3,
    date: "01-08-2024",
    name: "Alifort Hospital",
    product: "Stockbank",
    reason:
      "This order failed due to a lack of sufficient balance on the User’s wallet.",
    hospital_name: "Alifort Hospital",
    last_update: "05-09-2024",
  },
];

export default function VendorDeclinedOrdersComponent() {
  const pathname = usePathname();
  const router = useRouter();

  const [VendorDeclinedOrdersData, setVendorDeclinedOrdersData] = useState<
    VendorDeclinedOrdersItem[]
  >(initialVendorDeclinedOrdersData);
  const handleSend = (data: VendorDeclinedOrdersItem) => {
    router.push(
      `${pathname}/order-details?id=${data.id}&name=${data.name}&product=${data.product}&date=${data.date}`
    );
  };
  return (
    <div className="flex flex-col gap-5 pt-10">
      <div className="flex justify-between w-full">
        <h1 className="font-medium text-black text-[32px]">
          Vendor Declined Orders
        </h1>
      </div>

      <div>
        <Card>
          <CardHeader className="p-5 justify-between font-medium text-black text-xl">
            <span>All Declined Orders</span>
            <span>{VendorDeclinedOrdersData.length}</span>
          </CardHeader>
          <CardBody className="">
            <AppTable
              columns={VendorDeclinedOrdersColumns(handleSend)}
              data={VendorDeclinedOrdersData}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
