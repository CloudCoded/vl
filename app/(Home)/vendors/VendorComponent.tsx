"use client";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import React, { useState } from "react";
import { useSearch } from "@/hooks/useSearch";

import AppModal from "@/components/AppModal";
import { AppTable } from "@/components/table/data-table";
import VendorForm, { VendorFormData } from "./VendorForm";
import { VendorColumns, VendorItem } from "@/components/table/vendor-column";
import { Card, CardBody, CardHeader } from "@heroui/card";

const initialVendorData: VendorItem[] = [
  {
    id: 1,
    name: "Equinox",
    product_type: "Stockbank",
    stock_update: "Yes",
    email: "Equinox@gmail.com",
    contact_name: "Queen Josh",
    phone: "090123456789",
    address: "Lagos, Nigeria",
  },
  {
    id: 2,
    name: "Alifort Hospital",
    product_type: "Quip",
    stock_update: "No",
    email: "Alifort@gmail.com",
    contact_name: "Queen Josh",
    phone: "090123456789",
    address: "Lagos, Nigeria",
  },
  {
    id: 3,
    name: "Alifort Hospital",
    product_type: "Stockbank",
    stock_update: "Yes",
    email: "Alifort@gmail.com",
    contact_name: "Queen Josh",
    phone: "090123456789",
    address: "Lagos, Nigeria",
  },
  {
    id: 4,
    name: "Alifort Hospital",
    product_type: "Quip",
    stock_update: "No",
    email: "Alifort@gmail.com",
    contact_name: "Queen Josh",
    phone: "090123456789",
    address: "Lagos, Nigeria",
  },
  {
    id: 5,
    name: "New Vendor",
    product_type: "New Product",
    stock_update: "Yes",
    email: "newvendor@gmail.com",
    contact_name: "New Contact",
    phone: "090123456780",
    address: "New City, Nigeria",
  },
];

const VENDOR_SEARCH_FIELDS: (keyof VendorItem)[] = [
  "name",
  "product_type",
  "email",
  "contact_name",
  "phone",
  "address",
];

export default function VendorComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const VendorData = useSearch<VendorItem>(initialVendorData, VENDOR_SEARCH_FIELDS);

  function handleAddVendor() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleFormSubmit(data: VendorFormData) {
    const newVendorItem: VendorItem = {
      id: initialVendorData.length + 1,
      name: data.name,
      product_type: data.product_type,
      stock_update: data.stock_update,
      email: data.email,
      contact_name: data.contact_name,
      phone: `+234${data.phone}`,
      address: data.address,
    };
    setIsModalOpen(false);
  }

  return (
    <div className="flex flex-col gap-5 pt-10">
      <div className="flex justify-between w-full">
        <h1 className="font-medium text-black text-[32px]">Vendors</h1>

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
            + Add Vendor
          </Button>
        </div>
      </div>

      <div>
        <Card>
          <CardHeader className="p-5 justify-between font-medium text-black text-xl">
            <span>Vendor List</span> <span>{VendorData.length}</span>{" "}
          </CardHeader>
          <CardBody className="">
            <AppTable columns={VendorColumns} data={VendorData} />
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
          <VendorForm onSubmit={handleFormSubmit} isPending={false} />
        </AppModal>
      )}
    </div>
  );
}
