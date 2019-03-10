import {
  ChartLoadSettings,
  Google
} from "../GoogleChart/type/googleChartObject/googleChartObject";
import { CSSProperties } from "react";
import {
  ChartVersion,
  ChartName
} from "../GoogleChart/type/googleChartDefaultData";

export type ReactGoogleChartInfo = {
  version?: ChartVersion; // default = current
  setting: ChartLoadSettings;
  chartName: ChartName;
};
export type ReactGoogleDataInfo = {
  dataTable: any;
  option?: any;
};
export type ReactGoogleNodeInfo = {
  idName: string;
  inlineStyle?: CSSProperties;
};

export interface ISetChart {
  setChart: () => Promise<void>;
  setChartBasicInfo: () => Promise<void>;
  setChartOnLoadCallback: () => Promise<void>;
}

export interface IHandler {
  handleAfterLoad: (google: Google) => void;
  handleErrorScript: () => void;
  handleErrorRender: () => void;
}

export interface IGetData {
  onGetCallback: (drawCallback: (() => void) | null) => void;
}

export interface ICommonProps {
  option?: any;
  nodeInfo: {
    idName: string;
    wrapperStyle?: CSSProperties;
  };
}

export enum DataTableMethod {
  "PieCharts" = <any>"arrayToDataTable",
  "GaugeCharts" = <any>"arrayToDataTable",
  "ComboCharts" = <any>"arrayToDataTable",
  "GeoCharts" = <any>"arrayToDataTable",
  "AreaCharts" = <any>"arrayToDataTable",
  "BarCharts" = <any>"arrayToDataTable",
  "TreeMapCharts" = <any>"arrayToDataTable"
}

export enum ChartMethod {
  "PieCharts" = <any>"PieChart",
  "GaugeCharts" = <any>"Gauge",
  "ComboCharts" = <any>"ComboChart",
  "GeoCharts" = <any>"GeoChart",
  "AreaCharts" = <any>"AreaChart",
  "BarCharts" = <any>"BarChart",
  "TreeMapCharts" = <any>"TreeMap"
}
