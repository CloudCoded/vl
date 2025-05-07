import { Card, CardBody } from "@heroui/card";
import React from "react";
import { cn } from "@heroui/theme";
import { Icon } from "@iconify-icon/react";

import Image from "next/image";
import Link from "next/link";

const DashboardCard = ({
  icon,
  title,
  value,
  bgColor,
  iconColor,
  topRowStatsClassNames,
  url,
}: {
  icon: string;
  title: string;
  value: React.ReactNode;
  bgColor: string;
  iconColor: string;
  topRowStatsClassNames: string;
  url: string;
}) => (
  <Card
    isPressable
    as={Link}
    href={url}
    key={`top-stat-${title}`}
    className={cn(topRowStatsClassNames, bgColor)}
  >
    <CardBody className="p-0 h-full relative">
      <Image
        width={100}
        height={100}
        className="absolute top-0 right-0 w-24 h-20"
        alt="Background pattern"
        src="/curveUp.png"
      />
      <div className="flex flex-col items-start gap-2 absolute top-[9px] left-4 z-10">
        <div className="w-10 h-10 bg-white rounded-[30px] overflow-hidden border border-solid border-[#b703031a] flex items-center justify-center">
          <Icon icon={icon} className={cn(" w-6 h-6 text-2xl", iconColor)} />
        </div>
        <div className="font-['Poppins',Helvetica] font-medium text-base">
          {title}
        </div>
      </div>
      <div className="absolute top-[98px] right-8 font-medium text-2xl z-10">
        {value}
      </div>
      <Image
        width={100}
        height={100}
        className="absolute bottom-0 left-0 w-12 h-12"
        alt="Background pattern"
        src="/curveDown.png"
      />
    </CardBody>
  </Card>
);

export default DashboardCard;
