import { Card, CardBody } from "@heroui/card";
import React from "react";
import { PieChartComponent } from "@/components/charts/PieChartComponent";
import { ChartConfig } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

export const Revenue = () => {
  const chartData = [
    { product: "quip", value: 13.3, fill: "var(--color-quip)" },
    { product: "blood", value: 60, fill: "var(--color-blood)" },
    { product: "stock", value: 13.3, fill: "var(--color-stock)" },
    { product: "oxygen", value: 13.3, fill: "var(--color-oxygen)" },
  ];

  const chartConfig = {
    value: {
      label: "Products",
    },
    blood: {
      label: "Blood",
      color: "hsl(var(--flite-red))",
    },
    oxygen: {
      label: "Oxygen",
      color: "hsl(var(--flite-blue))",
    },
    quip: {
      label: "Quip",
      color: "hsl(var(--flite-orange))",
    },
    stock: {
      label: "Stock",
      color: "hsl(var(--flite-green))",
    },
  } satisfies ChartConfig;

  const bgColor = {
    blood: "fliteRed",
    oxygen: "fliteBlue",
    quip: "fliteOrange",
    stock: "fliteGreen",
  };

  const topProduct = chartData.reduce((prev, current) =>
    prev.value > current.value ? prev : current
  );

  return (
    <section className="w-full h-full bg-white overflow-y-auto ">
      <Card className="w-full rounded-[10px] border border-solid border-[#00000033] h-full">
        <CardBody className="p-6">
          <h2 className="font-semibold text-2xl text-black  mb-10">
            Revenue
          </h2>
          <div className="grid xl:grid-cols-2 gap-6">
            <div className=" ">
              <PieChartComponent
                chartData={chartData}
                chartConfig={chartConfig}
                topPerforming={topProduct.value}
              />
            </div>

            <div className="flex flex-row justify-center xl:flex-col gap-[30px]">
              <div className="flex flex-col gap-[11px]">
                <div
                  className={cn(
                    "w-5 h-3",
                    ` bg-${bgColor[topProduct.product as keyof typeof bgColor]}`
                  )}
                />
                <div className="flex flex-col gap-1.5">
                  <p className="font-normal text-sm text-black">
                    Top performing product
                  </p>
                  <p className="font-semibold text-xl text-black capitalize">
                    {topProduct.product}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-[11px]">
                <div className="w-5 h-3 bg-[#d9d9d9]" />
                <div className="flex flex-col gap-1.5">
                  <p className="font-normal text-sm text-black">
                    Revenue generated
                  </p>
                  <p className="font-semibold text-xl text-black">
                    ₦200,000,000.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};
