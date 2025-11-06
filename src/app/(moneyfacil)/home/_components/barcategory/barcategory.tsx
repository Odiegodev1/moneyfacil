"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart with an active bar"

const chartData = [
  { browser: "Trabalho", Gastos: 187, fill: "var(--color-red-500)" },
  { browser: "Mercado", Gastos: 200, fill: "var(--color-emerald-500)" },
  { browser: "Lazer", Gastos: 275, fill: "var(--color-blue-500)" },
  { browser: "contas", Gastos: 173, fill: "var(--color-yellow-500)" },
  { browser: "outros", Gastos: 90, fill: "var(--color-purple-500)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Trabalho: {
    label: "Trabalho",
    color: "var(--chart-1)",
  },
 Mercado : {
    label: "Mercado",
    color: "var(--chart-2)",
  },
  Lazer: {
    label: "Lazer",
    color: "var(--chart-3)",
  },
  contas: {
    label: "contas",
    color: "var(--chart-4)",
  },
  outros: {
    label: "outros",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartBarActive() {
  return (
    <Card >
      <CardHeader>
        <CardTitle>Bar Chart - Active</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="Gastos"
              
             
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )
              }}
            />
            
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
         
        </div>
       
      </CardFooter>
    </Card>
  )
}
