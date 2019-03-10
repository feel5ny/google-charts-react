import * as React from "react";
import GoogleChartLoader, {
  windowWithGoogle
} from "./GoogleChart/GoogleChartLoader";
import GoogleChart from "./GoogleChart/GoogleChart";
import {
  Google,
  ChartLoadSettings
} from "./GoogleChart/type/googleChartObject/googleChartObject";
import { getPackageType } from "./GoogleChart/model/googleSetChartInfo";
import {
  ReactGoogleNodeInfo,
  ReactGoogleDataInfo,
  ReactGoogleChartInfo,
  ISetChart,
  IHandler,
  IGetData
} from "./type/reactGoogleChart";

export namespace ReactGoogleChart {
  export interface IProps {
    chartInfo: ReactGoogleChartInfo;
    dataInfo: ReactGoogleDataInfo;
    nodeInfo: ReactGoogleNodeInfo;
  }

  export interface IState {
    isLoadScript: boolean;
    isRendering: boolean;
    drawCallback: (() => void) | null;
    google: Google | null;
  }
  export interface IStructure extends ISetChart, IHandler, IGetData {}
}

class ReactGoogleChart
  extends React.Component<ReactGoogleChart.IProps, ReactGoogleChart.IState>
  implements ReactGoogleChart.IStructure {
  constructor(props: ReactGoogleChart.IProps) {
    super(props);
    this.state = {
      isLoadScript: false,
      isRendering: false,
      google: null,
      drawCallback: null
    };
  }

  setChartBasicInfo = async () => {
    const { chartInfo } = this.props,
      { google } = this.state,
      packageType: ChartLoadSettings = getPackageType(chartInfo.setting);
    if (google)
      await google.charts.load(chartInfo.version || "current", packageType);
    else null;
  };

  setChartOnLoadCallback = async () => {
    const { drawCallback, google } = this.state;
    drawCallback && google
      ? await google.charts.setOnLoadCallback(drawCallback)
      : this.handleErrorRender();
  };

  setChart = async () => {
    this.setState({ isRendering: false });
    await this.setChartBasicInfo();
    await this.setChartOnLoadCallback();
    this.setState({ isRendering: true });
  };

  onGetCallback = (drawCallback: (() => void) | null) =>
    this.setState({ drawCallback });

  handleAfterLoad = (google: Google) => {
    this.setState({ isLoadScript: true, google });
    try {
      this.setChart();
    } catch (err) {
      this.handleErrorRender(err);
    }
  };

  handleErrorScript = () => {
    console.log("스크립트 로드 에러");
    this.setState({ isLoadScript: false });
  };

  handleErrorRender = (err?: any) => {
    console.log("차트 그리기 에러", err);
    this.setState({ isRendering: false });
  };

  render() {
    const { isLoadScript, isRendering, google } = this.state;
    const { chartInfo, dataInfo, nodeInfo } = this.props;
    const isAlreadyLoadScript = (): boolean => {
      const windowWithGoogle = window as windowWithGoogle;
      return !!windowWithGoogle.google;
    };
    return (
      <>
        {isLoadScript || isAlreadyLoadScript() ? (
          <GoogleChart
            getCallback={this.onGetCallback}
            google={google}
            chartData={{
              chartInfo,
              dataInfo,
              nodeInfo
            }}
          />
        ) : (
          <>
            Script Loading..
            <GoogleChartLoader
              onLoad={this.handleAfterLoad}
              onError={this.handleErrorScript}
            />
          </>
        )}
        {isRendering ? null : "render.."}
      </>
    );
  }
}
export default ReactGoogleChart;
