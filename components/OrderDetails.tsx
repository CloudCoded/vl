"use client";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import React, { useState, useMemo, useCallback } from "react";

import { AppTable } from "@/components/table/data-table";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Chip } from "@heroui/chip";
import AppSelect from "@/components/AppSelect";
import { Icon } from "@iconify-icon/react";

// Base type for order items, ensuring 'id' is present for updates
interface BaseOrderItem {
  id: number | string;
  [key: string]: any;
}

// Vendor type definition (can be moved to a shared types file if used elsewhere)
interface Vendor {
  key: string;
  label: string;
  value: string;
}

interface OrderDetailsDisplayProps<T extends BaseOrderItem> {
  // Navigation and Titles
  breadcrumbPreviousLabel: string;
  previousRouteSegment: string;
  breadcrumbCurrentLabel?: string;
  cardTitle?: string;
  orderId: string;

  // Table Data and Columns
  initialItemsData: T[];
  tableColumnsFactory: (onItemChange: (updatedItem: T) => void) => any[]; // Ideally ColumnDef<T>[]

  // Order Summary Information
  hospitalName: string;
  hospitalAddress: string;
  orderDateTime: string;

  // Primary Action
  primaryButtonText: string;
  onPrimaryButtonClick: (items: T[], selectedVendorKey?: string) => void;

  // Vendor Selection (Optional)
  showVendorSelection?: boolean;
  availableVendors?: Vendor[];
  initialSelectedVendorKey?: string;

  // Available Bids Button (Optional)
  showAvailableBidsButton?: boolean;
  onAvailableBidsClick?: () => void;

  showCheapPriceButton?: boolean;
  onCheapPriceClick?: (items: T[], selectedVendorKey?: string) => void;
}

export default function OrderDetailsDisplay<T extends BaseOrderItem>({
  breadcrumbPreviousLabel,
  previousRouteSegment,
  breadcrumbCurrentLabel = "Order Details",
  cardTitle = "Order Details",
  orderId,
  initialItemsData,
  tableColumnsFactory,
  hospitalName,
  hospitalAddress,
  orderDateTime,
  primaryButtonText,
  onPrimaryButtonClick,
  showVendorSelection = false,
  availableVendors = [],
  initialSelectedVendorKey,
  showAvailableBidsButton = false,
  onAvailableBidsClick,
  showCheapPriceButton = false,
  onCheapPriceClick,
}: OrderDetailsDisplayProps<T>) {
  const router = useRouter();
  const [itemsData, setItemsData] = useState<T[]>(initialItemsData);
  const [selectedVendorKey, setSelectedVendorKey] = useState<
    string | undefined
  >(initialSelectedVendorKey);

  const handleChange = useCallback((updatedItem: T) => {
    setItemsData((prevData) =>
      prevData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleBackToPreviousRoute = () => {
    router.push(`/${previousRouteSegment}`);
  };

  const handlePrimaryAction = () => {
    onPrimaryButtonClick(
      itemsData,
      showVendorSelection ? selectedVendorKey : undefined
    );
  };

  const columns = useMemo(
    () => tableColumnsFactory(handleChange),
    [tableColumnsFactory, handleChange]
  );

  const handleVendorSelectionChange = (selectedKey: React.Key | null) => {
    if (selectedKey !== null) {
      setSelectedVendorKey(String(selectedKey));
    } else {
      setSelectedVendorKey(undefined);
    }
  };

  const selectedVendor =
    showVendorSelection && availableVendors
      ? availableVendors.find((v) => v.key === selectedVendorKey)
      : undefined;

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
          <BreadcrumbItem onPress={handleBackToPreviousRoute}>
            {breadcrumbPreviousLabel}
          </BreadcrumbItem>
          <BreadcrumbItem>{breadcrumbCurrentLabel}</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div>
        <Card>
          <CardHeader className="p-5 justify-between font-medium text-black text-xl">
            <span className="flex items-center gap-2">
              <span>{cardTitle}</span>
              <Chip
                variant="bordered"
                className="border-lite-primary"
                size="sm"
              >
                {orderId}
              </Chip>
            </span>
            {showAvailableBidsButton && onAvailableBidsClick && (
              <Button
                variant="bordered"
                className="border-lite-primary bg-lite-primary text-white"
                size="lg"
                radius="sm"
                onPress={onAvailableBidsClick}
              >
                View Available Bids
              </Button>
            )}
          </CardHeader>
          <CardBody className="">
            <AppTable columns={columns} data={itemsData} />
            <Card className="flex flex-col gap-2 mt-5 bg-[#FBEEE7] p-2 rounded-none">
              <CardBody className="bg-white">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground/90 flex items-center gap-2">
                    <Icon
                      icon="ix:product"
                      className={cn("text-xl", "text-lite-primary")}
                    />{" "}
                    Total Product Count:
                  </span>
                  <h1 className="text-large font-medium">{itemsData.length}</h1>
                </div>
              </CardBody>
              {showVendorSelection && (
                <CardBody className="bg-white">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground/90 flex items-center gap-2">
                      <Icon
                        icon="fa-solid:address-book"
                        className={cn("text-xl", "text-lite-primary")}
                      />{" "}
                      <AppSelect
                        classNames="w-full bg-white max-w-[200px]"
                        handleSelectionChange={handleVendorSelectionChange}
                        options={availableVendors.map((vendor) => ({
                          value: vendor.key,
                          label: vendor.label,
                        }))}
                        placeholder="Select Vendor"
                        selected={selectedVendorKey}
                        radius="sm"
                        size="md"
                        variant="flat"
                        aria-label="Select Vendor"
                      />
                    </span>
                    <h1 className="text-large font-medium">
                      {selectedVendor
                        ? selectedVendor.label
                        : "No Vendor Selected"}
                    </h1>
                  </div>
                </CardBody>
              )}
              <CardBody className="bg-white">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground/90 flex items-center gap-2">
                    <Icon
                      icon="ri:hospital-fill"
                      className={cn("text-xl", "text-lite-primary")}
                    />{" "}
                    Hospital Name:
                  </span>
                  <h1 className="text-large font-medium">{hospitalName}</h1>
                </div>
              </CardBody>
              <CardBody className="bg-white">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground/90 flex items-center gap-2">
                    <Icon
                      icon="mdi:address-marker"
                      className={cn("text-xl", "text-lite-primary")}
                    />{" "}
                    Hospital Address:
                  </span>
                  <h1 className="text-large font-medium">{hospitalAddress}</h1>
                </div>
              </CardBody>
              <CardBody className="bg-white">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground/90 flex items-center gap-2">
                    <Icon
                      icon="bi:calendar2-date-fill"
                      className={cn("text-xl", "text-lite-primary")}
                    />{" "}
                    Order Date and Time:
                  </span>
                  <h1 className="text-large font-medium">{orderDateTime}</h1>
                </div>
              </CardBody>
            </Card>
          </CardBody>

          <CardFooter
            className={cn(
              "flex justify-end gap-2",
              showCheapPriceButton && "justify-between"
            )}
          >
            {showCheapPriceButton && onCheapPriceClick && (
              <Button
                variant="bordered"
                className=" bg-[#00000099] text-white"
                size="lg"
                radius="sm"
                onPress={() => onCheapPriceClick(itemsData, selectedVendorKey)}
              >
                Can’t Find Cheap Price
              </Button>
            )}
            <Button
              className="bg-lite-primary text-white"
              size="lg"
              radius="sm"
              onPress={handlePrimaryAction}
            >
              {primaryButtonText}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
