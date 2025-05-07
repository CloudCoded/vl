"use client";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import React, { useState } from "react";

import AppModal from "@/components/AppModal";
import { AppTable } from "@/components/table/data-table";

import { Card, CardBody, CardHeader } from "@heroui/card";
import VendorPaymentTermsForm, {
  VendorPaymentTermsFormData,
} from "./PaymentTermsForm";
import {
  VendorPaymentTermColumns,
  VendorPaymentTermItem,
} from "@/components/table/vendor-payment-term-column";

const initialVendorData: VendorPaymentTermItem[] = [
  {
    id: 1,
    vendor: "Equinox",
    product: "Stockbank",
    term: "I’ll only pay after the confirmation of the product",
    duration: "30 days",
  },
  {
    id: 2,
    vendor: "Alifort Hospital",
    product: "Quip",
    term: "I’ll only pay after the confirmation of the product",
    duration: "60 days",
  },
  {
    id: 3,
    vendor: "Alifort Hospital",
    product: "Stockbank",
    term: "I’ll only pay after the confirmation of the product",
    duration: "90 days",
  },
  {
    id: 4,
    vendor: "Alifort Hospital",
    product: "Quip",
    term: "I’ll only pay after the confirmation of the product",
    duration: "120 days",
  },
];

export default function VendorPaymentTermsComponent() {
  const [VendorData, setVendorData] =
    useState<VendorPaymentTermItem[]>(initialVendorData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddVendor() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleFormSubmit(data: VendorPaymentTermsFormData) {
    const newVendorItem: VendorPaymentTermItem = {
      id: VendorData.length + 1,
      vendor: data.vendor,
      product: data.product,
      term: data.term,
      duration: data.duration,
    };
    setVendorData((prevData) => [...prevData, newVendorItem]);
    setIsModalOpen(false);
  }

  return (
    <div className="flex flex-col gap-5 pt-10">
      <div className="flex justify-between w-full">
        <h1 className="font-medium text-black text-[32px]">
          Vendor Payment Terms
        </h1>

        <div>
          <Button
            size="lg"
            variant="solid"
            className={cn(
              "w-[190px] h-[50px] text-white font-semibold px-[51px] py-[18px] rounded-[5px]",
              `bg-lite-primary`
            )}
            radius="sm"
            onPress={handleAddVendor}
          >
            + Add Payment Term
          </Button>
        </div>
      </div>

      <div>
        <Card>
          <CardHeader className="p-5 justify-between font-medium text-black text-xl">
            <span>Payment Terms</span> <span>{VendorData.length}</span>
          </CardHeader>
          <CardBody className="">
            <AppTable columns={VendorPaymentTermColumns} data={VendorData} />
          </CardBody>
        </Card>
      </div>

      {isModalOpen && (
        <AppModal
          title="Add New Vendor"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          size="2xl"
        >
          <VendorPaymentTermsForm
            onSubmit={handleFormSubmit}
            isPending={false}
          />
        </AppModal>
      )}
    </div>
  );
}
