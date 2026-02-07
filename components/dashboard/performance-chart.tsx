"use client";

import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";

const PERFORMANCE_DATA = [87, 76, 81, 42, 88, 79, 54, 89, 79, 55, 88, 78];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function PerformanceChart() {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      fontFamily: "inherit",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 400,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        columnWidth: "40px",
        distributed: false,
        rangeBarOverlap: false,
        horizontal: false,
        barHeight: "100%",
        dataLabels: {
          position: "top",
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 1,
        opacityTo: 1,
        colorStops: [
          { offset: 0, color: "#0078D7", opacity: 1 },
          { offset: 75, color: "#7BB4E3", opacity: 0.8 },
        ],
      },
    },
    colors: ["#5B9BD5"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        filter: {
          type: "none",
        },
      },
    },
    xaxis: {
      categories: MONTHS,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: "#8597A8",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
      tooltip: { enabled: false },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: {
          colors: "#8597A8",
          fontSize: "12px",
          fontWeight: 400,
        },
        formatter: (val: number) => String(Math.round(val)),
      },
      axisBorder: { show: true, color: "rgba(230, 237, 245, 0.65)", },
      axisTicks: { show: false },
      crosshairs: { show: false },
      title: { text: undefined },
    },
    grid: {
      borderColor: "#E6EDF54D",
      strokeDashArray: 0,
      xaxis: {
        lines: { show: false },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10,
      },
    },
    tooltip: {
      enabled: true,
      theme: "light",
      fillSeriesColor: false,
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: (val: number) => `${val}%`,
        title: {
          formatter: () => "Performance",
        },
      },
    },
    legend: { show: false },
  };

  const series = [
    {
      name: "Performance",
      data: PERFORMANCE_DATA,
    },
  ];

  return (
    <div
      className="bg-white rounded-[10px] border border-[#E0E8ED] px-6 pt-6 pb-1"
      data-performance-chart
    >
      <h3 className="text-[20px] font-semibold text-[#1D3557] mb-4">
        12-Month Performance
      </h3>
      <div className="w-full min-h-[280px] -ml-2">
        <Chart
          options={options}
          series={series}
          type="bar"
          height={280}
          width="100%"
        />
      </div>
    </div>
  );
}
