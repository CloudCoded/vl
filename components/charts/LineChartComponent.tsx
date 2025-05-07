"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useRef } from "react"

const chartData = [
    { month: "Jan", blood: 0, oxygen: 67, quip: 67, stock: 67 },
    { month: "Feb", blood: 59, oxygen: 34, quip: 286, stock: 34 },
    { month: "Mar", blood: 7, oxygen: 3, quip: 167, stock: 23 },
    { month: "Apr", blood: 4, oxygen: 6, quip: 14, stock: 67 },
    { month: "May", blood: 3, oxygen: 32, quip: 3, stock: 98 },
    { month: "Jun", blood: 17, oxygen: 67, quip: 8, stock: 45 },
    { month: "Jul", blood: 3, oxygen: 23, quip: 1, stock: 7 },
    { month: "Aug", blood: 56, oxygen: 8, quip: 6, stock: 34 },
    { month: "Sep", blood: 68, oxygen: 0, quip: 86, stock: 76 },
    { month: "Oct", blood: 5, oxygen: 3, quip: 18, stock: 23 },
    { month: "Nov", blood: 135, oxygen: 23, quip: 16, stock: 12 },
    { month: "Dec", blood: 167, oxygen: 45, quip: 88, stock: 98 },
]

export default function LineChartComponent() {
    const chartRef = useRef<HTMLDivElement>(null)

    // Add SVG markers for arrowheads after the component mounts
    useEffect(() => {
        if (chartRef.current) {
            const svg = chartRef.current.querySelector("svg")
            
            if (svg) {
                // Check if defs already exists
                let defs = svg.querySelector("defs")
                if (!defs) {
                    defs = document.createElementNS("http://www.w3.org/2000/svg", "defs")
                    svg.prepend(defs)
                }

                // Create markers for each line
                const colors = ["blood", "oxygen", "quip", "stock"]
                colors.forEach((color) => {
                    const markerId = `arrow-${color}`

                    // Remove existing marker if it exists
                    const existingMarker = document.getElementById(markerId)
                    if (existingMarker) {
                        existingMarker.remove()
                    }

                    // Create new marker
                    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker")
                    marker.setAttribute("id", markerId)
                    marker.setAttribute("viewBox", "0 0 10 10")
                    marker.setAttribute("refX", "5")
                    marker.setAttribute("refY", "5")
                    marker.setAttribute("markerWidth", "6")
                    marker.setAttribute("markerHeight", "6")
                    marker.setAttribute("orient", "auto-start-reverse")

                    // Create arrowhead path
                    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
                    path.setAttribute("d", "M 0 0 L 10 5 L 0 10 z")
                    path.setAttribute("fill", `var(--color-${color})`)

                    marker.appendChild(path)
                    defs.appendChild(marker)
                })

                // Apply markers to the lines
                colors.forEach((color) => {
                    const line = svg.querySelector(`path.recharts-line-curve[stroke="var(--color-${color})"]`)
                    if (line) {
                        line.setAttribute("marker-end", `url(#arrow-${color})`)
                    }
                })
            }
        }
    }, [])
    return (
        <Card className="border-none shadow-none">
            <CardContent>
                <div ref={chartRef}>

                    <ChartContainer
                        config={{
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
                        }}
                        className="min-h-[300px]"
                    >
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                            <Line dataKey="blood" type="monotone" stroke="var(--color-blood)" strokeWidth={2} dot={false} />
                            <Line dataKey="oxygen" type="monotone" stroke="var(--color-oxygen)" strokeWidth={2} dot={false} />
                            <Line dataKey="quip" type="monotone" stroke="var(--color-quip)" strokeWidth={2} dot={false} />
                            <Line dataKey="stock" type="monotone" stroke="var(--color-stock)" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ChartContainer>   </div>
            </CardContent>
        </Card>
    )
}

