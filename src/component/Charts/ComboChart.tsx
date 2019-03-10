import * as React from "react";
import ReactGoogleChart from "../../../joy_modules/react-google-charts/ReactGoogleChart";
import { ComboChartsData } from "../../../joy_modules/react-google-charts/GoogleChart/type/googleChartData";
import { ICommonProps } from "../../../joy_modules/react-google-charts/type/reactGoogleChart";

namespace ComboChart {
  export interface IProps extends ICommonProps {
    dataTable: ComboChartsData;
  }
}

const ComboChart: React.SFC<ComboChart.IProps> = ({
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
        chartName: "ComboCharts"
      }}
      dataInfo={{ dataTable, option }}
      nodeInfo={{
        idName: nodeInfo.idName,
        inlineStyle: nodeInfo.wrapperStyle
      }}
    />
  );
};
export default ComboChart;
