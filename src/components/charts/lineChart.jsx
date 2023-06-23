import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className="bg-white dark:bg-secondary-dark-bg"
      style={{ padding: "20px", borderRadius: "7px", width: "58%" }}
    >
      <span style={{ fontSize: "17px", fontWeight: "500" }}>GPA</span>

      <ChartComponent
        style={{ marginTop: "30px" }}
        id="line-chart"
        height="300px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{ background: "transparent" }}
      >

        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />

        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
