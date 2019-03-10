import { GoogleChartsVisualization } from "./googleChartObjectVisualization";
import { ChartVersion, ChartPackages, Lang } from "../googleChartDefaultData";

export interface Google {
  charts: GoogleCharts;
  visualization: GoogleChartsVisualization;
  //
  load: any;
  setOnLoadCallback: any;
}

interface GoogleCharts {
  load: GoogleChartLoad;
  loader: GoogleChartsLoader;
  setOnLoadCallback: (callback: DrawCallback) => void;
}

type DrawCallback = () => void;

export type GoogleChartLoad = (
  version: ChartVersion,
  settings: ChartLoadSettings
) => void;

export interface ChartLoadSettings {
  packages: ChartPackages[];
  language?: Lang; // default 'en'
  callback?: Function;
  mapsApiKey?: string;
}

interface GoogleChartsLoader {
  VersionSpecific: GoogleChartsLoaderVersion;
}

interface GoogleChartsLoaderVersion {
  load: any;
  makeCssUrl: any;
  setOnLoadCallback: any;
}
