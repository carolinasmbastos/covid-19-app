import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const CountryChart = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={["confirmed"]}
    indexBy="days"
    margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    padding={0.3}
    colors="#3f51b5"
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "number of days since March 1st",
      legendPosition: "middle",
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Confirmed cases",
      legendPosition: "middle",
      legendOffset: -50
    }}
    enableLabel={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["brighter", 2.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "top",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: -30,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default CountryChart;
