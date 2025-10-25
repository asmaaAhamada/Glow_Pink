import { useTheme } from "@mui/material";
import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const SalesBarChart = () => {
     const theme = useTheme(); // استخدام ألوان الثيم
  const barColor = theme.palette.primary.main; // 
  // بيانات المبيعات حسب أيام الأسبوع
  const data = [
    { day: "Mon", sales: 50 },
    { day: "Tue", sales: 75 },
    { day: "Wed", sales: 60 },
    { day: "Thu", sales: 90 },
    { day: "Fri", sales: 100 },
    { day: "Sat", sales: 40 },
    { day: "Sun", sales: 70 },
  ];

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={2}
       height={250}  // مسافة بين الأعمدة
    >
      {/* محور X */}
      <VictoryAxis
        tickValues={data.map(d => d.day)}
        tickFormat={data.map(d => d.day)}
        style={{
          tickLabels: { fill: theme.palette.text.primary, fontSize: 12 },
          axis: { stroke: theme.palette.divider },
        }}
      />
      
      {/* محور Y */}
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => `$${x}`} 
        // صيغة المبيعات
        style={{
          tickLabels: { fill: theme.palette.text.primary, fontSize: 12 },
          grid: { stroke: theme.palette.divider, strokeDasharray: "3,3" },
        }}
      />

      {/* الأعمدة */}
      <VictoryBar
        data={data}
        x="day"
        y="sales"
 style={{ data: { fill: barColor, borderRadius: 24 } }}
        barWidth={10}      />
    </VictoryChart>
  );
};

export default SalesBarChart;
