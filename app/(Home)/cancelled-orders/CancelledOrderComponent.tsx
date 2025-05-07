"use client";
import React, { useState } from "react";

import { AppTable } from "@/components/table/data-table";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { FailedOrdersItem } from "@/components/table/failed-orders-column";
import { usePathname, useRouter } from "next/navigation";
import { CancelledOrderColumns } from "@/components/table/cancelled-orders-column";

const initialCancelledOrderData: FailedOrdersItem[] = [
  {
    id: 1,
    date: "01-08-2024",
    name: "Equinox",
    product: "Stockbank",
    reason:
      "The requested blood type was not available at the time of request and facility could not wait for the donors hence the cancellation.",
    status: "Cancelled",
    last_update: "05-09-2024",
  },
  {
    id: 2,
    date: "01-08-2024",
    name: "Alifort Hospital",
    product: "Quip",
    reason:
      "The requested blood type was not available at the time of request and facility could not wait for the donors hence the cancellation.",
    status: "Cancelled",
    last_update: "05-09-2024",
  },
  {
    id: 3,
    date: "01-08-2024",
    name: "Alifort Hospital",
    product: "Stockbank",
    reason:
      "The requested blood type was not available at the time of request and facility could not wait for the donors hence the cancellation.",
    status: "Cancelled",
    last_update: "05-09-2024",
  },
];

export default function CancelledOrderComponent() {
  const pathname = usePathname();
  const router = useRouter();

  const [CancelledOrderData, setCancelledOrderData] = useState<
    FailedOrdersItem[]
  >(initialCancelledOrderData);
  const handleSort = (data: FailedOrdersItem) => {
    router.push(
      `${pathname}/order-details?id=${data.id}&name=${data.name}&product=${data.product}&date=${data.date}`
    );
  };
  return (
    <div className="flex flex-col gap-5 pt-10">
      <div className="flex justify-between w-full">
        <h1 className="font-medium text-black text-[32px]">Cancelled Orders</h1>
      </div>

      <div>
        <Card>
          <CardHeader className="p-5 justify-between font-medium text-black text-xl">
            <span>All Cancelled Orders</span>
            <span>{CancelledOrderData.length}</span>
          </CardHeader>
          <CardBody className="">
            <AppTable
              columns={CancelledOrderColumns}
              data={CancelledOrderData}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
