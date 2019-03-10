import * as React from "react";
import ReactGoogleChart from "../../../joy_modules/react-google-charts/ReactGoogleChart";
import { AreaChartsData } from "../../../joy_modules/react-google-charts/GoogleChart/type/googleChartData";
import { ICommonProps } from "../../../joy_modules/react-google-charts/type/reactGoogleChart";

namespace AreaChart {
  export interface IProps extends ICommonProps {
    dataTable: AreaChartsData;
  }
}

const AreaChart: React.SFC<AreaChart.IProps> = ({
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
        chartName: "AreaCharts"
      }}
      dataInfo={{ dataTable, option }}
      nodeInfo={{
        idName: nodeInfo.idName,
        inlineStyle: nodeInfo.wrapperStyle
      }}
    />
  );
};
export default AreaChart;
