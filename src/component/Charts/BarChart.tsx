import * as React from "react";
import ReactGoogleChart from "../../../joy_modules/react-google-charts/ReactGoogleChart";
import { BarChartsData } from "../../../joy_modules/react-google-charts/GoogleChart/type/googleChartData";
import { ICommonProps } from "../../../joy_modules/react-google-charts/type/reactGoogleChart";

namespace BarChart {
  export interface IProps extends ICommonProps {
    dataTable: BarChartsData;
  }
}

const BarChart: React.SFC<BarChart.IProps> = ({
  dataTable,
  option,
  nodeInfo
}) => {
  return (
    <ReactGoogleChart
      chartInfo={{
        setting: {
          packages: ["corechart", "bar"]
        },
        chartName: "BarCharts"
      }}
      dataInfo={{ dataTable, option }}
      nodeInfo={{
        idName: nodeInfo.idName,
        inlineStyle: nodeInfo.wrapperStyle
      }}
    />
  );
};
export default BarChart;
