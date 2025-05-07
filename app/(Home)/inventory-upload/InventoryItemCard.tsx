import { Card, CardBody } from "@heroui/card";
import React from "react"; 
import { Image } from "@heroui/image";
import { Icon } from "@iconify-icon/react";

export default function InventoryItemCard({
  name,
  product,
  date,
  time,
  img,
}: {
  name: string;
  product: string;
  date: string;
  time: string;
  img: string;
}) {
  return (
    <div>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-5 gap-6 md:gap-4 items-center justify-center w-full">
            <div className="relative col-span-6 md:col-span-1">
              <Image
                alt="Album cover"
                className="object-cover"
                height={150}
                shadow="md"
                src={img}
                width="100%"
              />
            </div>

            <Card className="flex flex-col items-center shadow-none justify-around h-full col-span-6 md:col-span-1 border-black/30 border-b-2 md:border-b-0 rounded-none">
              <h3 className="font-semibold text-foreground/90 flex items-center gap-2">
                <Icon
                  icon="ri:hospital-fill"
                  className="text-xl text-lite-primary"
                />
                Hospital Name:
              </h3>
              <h1 className="text-large font-medium">{name}</h1>
            </Card>

            <Card className="flex flex-col items-center justify-around h-full col-span-6 md:col-span-1 border-black/30 border-b-2 md:border-b-0 md:border-l-2 shadow-none rounded-none">
              <h3 className="font-semibold text-foreground/90 flex items-center gap-2">
                <Icon icon="ix:product" className="text-xl text-lite-primary" />
                Product Name:
              </h3>
              <h1 className="text-large font-medium">{product}</h1>
            </Card>

            <Card className="flex flex-col items-center justify-around h-full col-span-6 md:col-span-1 border-black/30  border-b-2 md:border-b-0 md:border-l-2 shadow-none rounded-none">
              <h3 className="font-semibold text-foreground/90 flex items-center gap-2">
                <Icon
                  icon="bi:calendar2-date-fill"
                  className="text-xl text-lite-primary"
                />
                Date:
              </h3>
              <h1 className="text-large font-medium">{date}</h1>
            </Card>

            <Card className="flex flex-col items-center justify-around h-full col-span-6 md:col-span-1 border-black/30 md:border-l-2 shadow-none rounded-none">
              <h3 className="font-semibold text-foreground/90 flex items-center gap-2">
                <Icon
                  icon="weui:time-filled"
                  className="text-xl text-lite-primary"
                />
                Time:
              </h3>
              <h1 className="text-large font-medium">{time}</h1>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
