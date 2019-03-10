import { Google } from "../type/googleChartObject/googleChartObject";
import {
  ChartMethod,
  ReactGoogleChartInfo
} from "../../../../joy_modules/react-google-charts/type/reactGoogleChart";
import { ChartName } from "../type/googleChartDefaultData";

export class googleChartDraw {
  chartInfo: ReactGoogleChartInfo;
  private google: Google | null;
  private chartName: ChartName;
  private refNode: HTMLDivElement | null;
  static GET: (
    chartInfo: ReactGoogleChartInfo,
    refNode: HTMLDivElement | null,
    google: Google | null,
    chartName: ChartName
  ) => googleChartDraw;

  constructor(
    _chartInfo: ReactGoogleChartInfo,
    _refNode: HTMLDivElement | null,
    _google: Google | null,
    _chartName: ChartName
  ) {
    this.chartInfo = _chartInfo;
    this.refNode = _refNode;
    this.google = _google;
    this.chartName = _chartName;
  }
  public setChart = () => {
    return this.google
      ? new this.google.visualization[ChartMethod[this.chartName]](this.refNode)
      : null;
  };
}

googleChartDraw.GET = (
  chartInfo: ReactGoogleChartInfo,
  refNode: HTMLDivElement | null,
  google: Google,
  chartName: ChartName
) => new googleChartDraw(chartInfo, refNode, google, chartName);
