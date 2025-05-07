"use client";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import React, { useState } from "react";
import InventoryItemCard from "./InventoryItemCard";
import InventoryForm, { InventoryFormData } from "./InventoryForm";
import AppModal from "@/components/AppModal";

interface InventoryItem {
  id: number;
  name: string;
  product: string;
  date: string;
  time: string;
  img: string | FileList;
}

const initialInventoryData: InventoryItem[] = [
  {
    id: 1,
    name: "Alifort Hospital",
    product: "Stockbank",
    date: "24-06-2024",
    time: "10:00am",
    img: "https://heroui.com/images/album-cover.png",
  },
  {
    id: 2,
    name: "Alifort Hospital",
    product: "Quip",
    date: "Date 2",
    time: "Time 2",
    img: "https://heroui.com/images/album-cover.png",
  },
  {
    id: 3,
    name: "Alifort Hospital",
    product: "Stockbank",
    date: "Date 3",
    time: "Time 3",
    img: "https://heroui.com/images/album-cover.png",
  },
  {
    id: 4,
    name: "Alifort Hospital",
    product: "Quip",
    date: "Date 4",
    time: "Time 4",
    img: "https://heroui.com/images/album-cover.png",
  },
  {
    id: 5,
    name: "Alifort Hospital",
    product: "Stockbank",
    date: "Date 5",
    time: "Time 5",
    img: "https://heroui.com/images/album-cover.png",
  },
];

export default function InventoryComponent() {
  const [inventoryData, setInventoryData] =
    useState<InventoryItem[]>(initialInventoryData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddInventory() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleFormSubmit(data: InventoryFormData) {
    const newInventoryItem: InventoryItem = {
      id: inventoryData.length + 1,
      name: data.name,
      product: data.product,
      date: data.date,
      time: data.time,
      img: data.img,
    };
    setInventoryData((prevData) => [...prevData, newInventoryItem]);
    setIsModalOpen(false);
  }

  return (
    <div className="flex flex-col gap-5 pt-10">
      <div className="flex justify-between w-full">
        <h1 className="font-medium text-black text-[32px]">
          Inventory ({inventoryData.length})
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
            onPress={handleAddInventory}
          >
            + Add Inventory
          </Button>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-5">
          {inventoryData.map((item) => (
            <InventoryItemCard
              key={item.id}
              {...item}
              img={
                typeof item.img === "string"
                  ? item.img
                  : item.img instanceof FileList && item.img.length > 0
                  ? URL.createObjectURL(item.img[0])
                  : "/placeholder-image.png"
              }
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <AppModal
          title="Add New Inventory"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          size="2xl"
        >
          <InventoryForm onSubmit={handleFormSubmit} isPending={false} />
        </AppModal>
      )}
    </div>
  );
}
