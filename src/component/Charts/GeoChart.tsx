import * as React from "react";
import ReactGoogleChart from "../../../joy_modules/react-google-charts/ReactGoogleChart";
import { GeoChartsData } from "../../../joy_modules/react-google-charts/GoogleChart/type/googleChartData";
import { ICommonProps } from "../../../joy_modules/react-google-charts/type/reactGoogleChart";

namespace GeoChart {
  export interface IProps extends ICommonProps {
    dataTable: GeoChartsData;
  }
}

const GeoChart: React.SFC<GeoChart.IProps> = ({
  dataTable,
  option,
  nodeInfo
}) => {
  return (
    <ReactGoogleChart
      chartInfo={{
        setting: {
          packages: ["geochart"],
          mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
        },
        chartName: "GeoCharts"
      }}
      dataInfo={{ dataTable, option }}
      nodeInfo={{
        idName: nodeInfo.idName,
        inlineStyle: nodeInfo.wrapperStyle
      }}
    />
  );
};
export default GeoChart;
