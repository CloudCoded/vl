import React from "react";

import { Card, CardBody } from "@heroui/card"; 
import { AppTable } from "@/components/table/data-table";

import { Button } from "@heroui/button";
import { cn } from "@/lib/utils";

import { ProductColumns } from "@/components/table/product-columns";

export const ProductDetailsSection = ({
  tableData,
  title,
  handleDownload,
}: {
  tableData: any[];
  title: string;
  handleDownload: () => void;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between w-full">
        <h1 className="font-medium text-black text-[32px]">
          Products - {title}
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
            onPress={handleDownload}
          >
            + Add Product
          </Button>
        </div>
      </div>

      <Card className="bg-[#fbfbfb] border border-solid border-[#0000001a]">
        <CardBody className="p-5 justify-center">
          <div className="flex items-center justify-between ">
            <h2 className=" font-medium text-black text-2xl">
              {title} Products
            </h2>
          </div>

          <div className="flex flex-col w-full py-8 gap-[52px] overflow-y-auto">
            <div>
              <AppTable
                columns={ProductColumns(`bg-lite-primary text-white`)}
                data={tableData}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
