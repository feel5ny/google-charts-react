import * as React from "react";
import { ReactGoogleChart } from "../ReactGoogleChart";
import { DataTableMethod, ChartMethod } from "../type/reactGoogleChart";
import { Google } from "./type/googleChartObject/googleChartObject";
import { googleChartDraw } from "./model/googleChartDraw";
import { googleChartOption } from "./model/googleChartOption";
import { googleChartDataTable } from "./model/googleChartDataTable";

namespace GoogleChart {
  export interface IProps {
    getCallback: (drawCallback: (() => void) | null) => void;
    google: Google | null;
    chartData: ReactGoogleChart.IProps;
  }
}
class GoogleChart extends React.Component<GoogleChart.IProps> {
  private divRef: React.RefObject<HTMLDivElement> = React.createRef();
  private drawModel: googleChartDraw;
  private dataModel: googleChartDataTable;
  private optionModel: googleChartOption;
  constructor(props: GoogleChart.IProps) {
    super(props);
  }

  drawCallback = () => {
    const { google } = this.props;
    if (google) {
      const data = this.dataModel.setDataTable(),
        options = this.optionModel.setOptions(),
        chart = this.drawModel.setChart();
      chart.draw(data, options);
    }
  };

  componentDidMount = () => {
    const { chartData, google } = this.props;
    const { chartInfo, dataInfo } = chartData;
    this.drawModel = googleChartDraw.GET(
      chartInfo,
      this.divRef.current,
      google,
      chartInfo.chartName
    );
    this.dataModel = googleChartDataTable.GET(
      dataInfo.dataTable,
      google,
      chartInfo.chartName
    );
    this.optionModel = googleChartOption.GET(dataInfo.option);
    this.props.getCallback(this.drawCallback);
  };

  render() {
    const { idName, inlineStyle } = this.props.chartData.nodeInfo;
    return <div id={idName} style={inlineStyle} ref={this.divRef} />;
  }
}
export default GoogleChart;
