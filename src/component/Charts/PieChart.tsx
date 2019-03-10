import * as React from "react";
import ReactGoogleChart from "../../../joy_modules/react-google-charts/ReactGoogleChart";
import { PieChartsData } from "../../../joy_modules/react-google-charts/GoogleChart/type/googleChartData";
import { ICommonProps } from "../../../joy_modules/react-google-charts/type/reactGoogleChart";

namespace PieChart {
  export interface IProps extends ICommonProps {
    dataTable: PieChartsData;
  }
}

const PieChart: React.SFC<PieChart.IProps> = ({
  dataTable,
  option,
  nodeInfo
}) => {
  return (
    <ReactGoogleChart
      chartInfo={{
        setting: {
          packages: ["corechart"]
        },
        chartName: "PieCharts"
      }}
      dataInfo={{ dataTable, option }}
      nodeInfo={{
        idName: nodeInfo.idName,
        inlineStyle: nodeInfo.wrapperStyle
      }}
    />
  );
};
export default PieChart;
