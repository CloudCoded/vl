"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export function BarChartComponent({ chartData, chartConfig, item }: {
    chartData: any[];
    chartConfig: ChartConfig;
    item: string
}) {


    const fillColor = chartConfig[item].color
    
    return (
        <Card className="border-none shadow-none">

            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey={item} fill={fillColor} radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
