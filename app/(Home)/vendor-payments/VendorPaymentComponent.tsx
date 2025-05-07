"use client";
import React, { useState } from "react";
import { DateValue, parseDate } from "@internationalized/date";

import { AppTable } from "@/components/table/data-table";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";

import { DatePicker } from "@heroui/date-picker";

import AppModal from "@/components/AppModal";

import {
  vendorPaymentColumns,
  VendorPayment,
} from "@/components/table/vendor-payment-column";

export const VendorPaymentComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<VendorPayment | null>(null);
  const [modalMode, setModalMode] = useState<"details" | "invoice" | null>(
    null
  );

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedRow(null);
    setModalMode(null);
  };

  // Helper function to create dates for sample data
  const createSampleDate = (day: number) => {
    const date = new Date(2024, 3, day); // April 2024
    return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };

  const initialTableData = Array(8)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      vendor: "Marshall Sv",
      product: "Gloves",
      orders: "20",
      total_due: "20,000",
      payment_in_progress: "Nill",
      payment_sent_to_bank: "Nill",
      payment_confirmation: "Confirmed",
      date: createSampleDate(index + 1), // Add date field, e.g., 2024-04-01, 2024-04-02, etc.
    }));

  const [tableData, setTableData] = useState(initialTableData);
  const [displayedData, setDisplayedData] = useState(initialTableData);

  const [startDate, setStartDate] = React.useState<DateValue | null>(
    parseDate("2024-04-04")
  );
  const [endDate, setEndDate] = React.useState<DateValue | null>(
    parseDate("2024-04-08") // Adjusted for better initial filtering example
  );

  const handleViewDetails = (data: VendorPayment) => {
    setSelectedRow(data);
    setModalMode("details");
    setOpen(true);
  };

  const handleViewInvoice = (data: VendorPayment) => {
    setSelectedRow(data);
    setModalMode("invoice");
    setOpen(true);
  };

  const handleFetch = () => {
    if (!startDate || !endDate) {
      setDisplayedData(tableData);
      return;
    }

    const start = new Date(startDate.year, startDate.month - 1, startDate.day);
    const end = new Date(endDate.year, endDate.month - 1, endDate.day);

    if (start > end) {
      setDisplayedData(tableData); // Or show an error/message
      return;
    }

    const filteredData = tableData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= start && itemDate <= end;
    });
    setDisplayedData(filteredData);
  };

  const handleReset = () => {
    setDisplayedData(initialTableData);
    // Optionally, reset date pickers as well
    // setStartDate(parseDate("2024-04-04"));
    // setEndDate(parseDate("2024-04-08"));
  };

  return (
    <main className="pt-5">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between w-full">
          <h1 className="font-medium text-black text-[32px]">Vendor Payment</h1>
        </div>

        <Card className="bg-[#fbfbfb] border border-solid border-[#0000001a]">
          <CardHeader className="p-5 justify-between">
            <h2 className=" font-medium text-black text-2xl">Payment Terms</h2>
          </CardHeader>
          <CardBody className="gap-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-end gap-x-[57px] gap-y-5 xl:mr-20">
              <div>
                <DatePicker
                  className="max-w-[284px]"
                  label="Start Date"
                  labelPlacement="outside"
                  value={startDate}
                  onChange={setStartDate}
                  variant="bordered"
                  radius="sm"
                  size="lg"
                  classNames={{
                    calendarContent: "text-white ",
                  }}
                />
              </div>

              <div>
                <DatePicker
                  className="max-w-[284px]"
                  label="End Date"
                  labelPlacement="outside"
                  value={endDate}
                  onChange={setEndDate}
                  variant="bordered"
                  radius="sm"
                  size="lg"
                  classNames={{
                    calendarContent: "text-white ",
                  }}
                />
              </div>

              <Button
                className="h-[50px] bg-[#008753] text-white font-medium px-[51px] py-[18px] rounded-[5px]"
                onPress={handleFetch}
              >
                Fetch Data
              </Button>
              <Button
                className="h-[50px] bg-gray-300 text-black font-medium px-[51px] py-[18px] rounded-[5px] ml-4"
                onPress={handleReset}
              >
                Reset
              </Button>
            </div>
            <div>
              <AppTable
                columns={vendorPaymentColumns(
                  handleViewDetails,
                  handleViewInvoice,
                  "bg-lite-primary text-white"
                )}
                data={displayedData}
              />
            </div>
          </CardBody>
        </Card>
      </div>

      <AppModal
        hideCloseButton
        backdrop="blur"
        isOpen={open}
        size="3xl"
        title={
          modalMode === "details" && selectedRow
            ? `Vendor Details: ${selectedRow.vendor}`
            : modalMode === "invoice" && selectedRow
              ? `Invoice for ${selectedRow.vendor} - Order ${selectedRow.orders}`
              : ""
        }
        headerClassNames="font-medium py-5 justify-between w-full rounded-tl-xl rounded-tr-xl"
        onClose={handleCloseModal}
      >
        <Card className="capitalize shadow-none">
          <CardBody>
            {selectedRow && modalMode === "details" && (
              <div>
                <p>
                  <strong>Vendor:</strong> {selectedRow.vendor}
                </p>
                <p>
                  <strong>Product:</strong> {selectedRow.product}
                </p>
                <p>
                  <strong>Orders:</strong> {selectedRow.orders}
                </p>
                <p>
                  <strong>Total Due:</strong> {selectedRow.total_due}
                </p>
                <p>
                  <strong>Payment Confirmation:</strong>{" "}
                  {selectedRow.payment_confirmation}
                </p>
                <p>
                  <strong>Payment In Progress:</strong>{" "}
                  {selectedRow.payment_in_progress}
                </p>
                <p>
                  <strong>Payment Sent to Bank:</strong>{" "}
                  {selectedRow.payment_sent_to_bank}
                </p>
                <p>
                  <strong>Date:</strong> {selectedRow.date}
                </p>
              </div>
            )}
            {selectedRow && modalMode === "invoice" && (
              <div>
                <p>
                  <strong>Invoice ID:</strong> INV-{selectedRow.id}-
                  {selectedRow.date.replace(/-/g, "")}
                </p>
                <p>
                  <strong>Vendor:</strong> {selectedRow.vendor}
                </p>
                <p>
                  <strong>Product:</strong> {selectedRow.product}
                </p>
                <p>
                  <strong>Orders:</strong> {selectedRow.orders}
                </p>
                <p>
                  <strong>Total Due:</strong> {selectedRow.total_due}
                </p>
                <p>
                  <strong>Date:</strong> {selectedRow.date}
                </p>
                {/* <p className="mt-4">
                  <em>Further invoice details would go here...</em>
                </p> */}
              </div>
            )}
            {!selectedRow && <p>No data selected.</p>}
          </CardBody>
        </Card>
      </AppModal>
    </main>
  );
};
