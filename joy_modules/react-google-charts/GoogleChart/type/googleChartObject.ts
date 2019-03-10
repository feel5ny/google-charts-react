import { ChartVersion, ChartPackages, Lang } from "./googleChartData";

export interface Google {
  charts: GoogleCharts;
  load: any;
  setOnLoadCallback: any;
  visualization: GoogleChartsVisualization;
}

interface GoogleCharts {
  load: GoogleChartLoad;
  loader: GoogleChartsLoader;
  setOnLoadCallback: (callback: DrawCallback) => void;
}

interface GoogleChartReformatData {
  ArrowFormat: GoogleChartReformatDataArrow;
  BarFormat: GoogleChartReformatDataBar;
  ColorFormat: GoogleChartReformatDataColor;
  DateFormat: any;
  NumberFormat: any;
  PatternFormat: any;
  TableArrowFormat: any;
  TableBarFormat: any;
  TableColorFormat: any;
  TableDateFormat: any;
  TablePatternFormat: any;
}

interface GoogleChartReformatDataArrow {
  base?: number;
}
interface GoogleChartReformatDataBar {
  base?: number; // default 0
  colorNegative?: "red" | "green" | "blue"; // default red
  colorPositive?: "red" | "green" | "blue"; // default blue
  drawZeroLine?: boolean; // default false
  max?: number; // Default value is the highest value in the table.
  min?: number; // Default value is the lowest value in the table.
  showValue?: boolean; //Default value is true.
  width?: number; // Default value is 100
}

type colorFormatArg = string | number | Date;
// Time | TimeOfDay;
interface GoogleChartReformatDataColor {
  addRange?: (
    from: colorFormatArg,
    to: colorFormatArg,
    color: string,
    bgcolor: string
  ) => void;
  addGradientRange?: (
    from: colorFormatArg,
    to: colorFormatArg,
    color: string,
    fromBgColor: string,
    toBgColor: string
  ) => void;
  format?: (dataTable: any, columnIndex: number) => void;
}

interface GoogleChartsDashboards {
  ChartWrapper: any;
  Dashboard: any;
  DashboardWrapper: any;
}
interface GoogleChartsControlsGallery {
  Control: any;
  ControlUi: any;
  ControlWrapper: any;
  CategoryFilter: any;
  ChartRangeFilter: any;
  ChartRangeFilterUi: any;
  DateRangeFilter: any;
  DateRangeFilterUi: any;
  NumberRangeFilter: any;
  NumberRangeSetter: any;
  NumberRangeUi: any;
  StringFilter: any;
  StringFilterUi: any;
  Filter: any;
}
interface GoogleChartsDataTable {
  DataTable: any;
  DataView: any;
  arrayToDataTable: any;
  dataTableToCsv: any;
  Query: any;
  QueryResponse: any;
  QueryWrapper: any;
  CustomQuery: any;
}

interface GoogleChartsVisualization
  extends GoogleChartReformatData,
    GoogleChartsDataTable,
    GoogleChartsDashboards,
    GoogleChartsControlsGallery {
  AreaChart: (el: Element) => void;
  BarChart: any;
  BubbleChart: any;
  CandlestickChart: any;
  ColumnChart: any;
  ComboChart: any;
  Gauge: any;
  GeoChart: any;
  Histogram: any;
  LineChart: any;
  PieChart: any;
  ScatterChart: any;
  SparklineChart: any;
  SteppedAreaChart: any;
  Timeline: any;
  CoreChart: any;

  ColumnSelector: any;
  RangeSelector: any;
  SelectorUi: any;
  ChartSelection: any;

  Choreographer: any;

  DrilldownOperator: any;
  DrilldownOperatorUi: any;
  Operator: any;

  GadgetHelper: any;

  HeadlessUi: any;

  RemoteDataSource: any;

  Locale: string;
  ModulePath: Object;
  Version: string;

  createSnippet: any;
  createUrl: any;
  createWrapper: any;

  data: any;
  datautils: any;

  drawChart: any;
  drawDrilldown: any;
  drawFromUrl: any;
  drawToolbar: any;
  errors: any;
  events: any;

  isDebug: boolean;
  isPseudo: boolean;

  mapsApiKey: Object;
}

type DrawCallback = () => void;

type GoogleChartLoad = (
  version: ChartVersion,
  settings: ChartLoadSettings
) => void;

interface ChartLoadSettings {
  packages: ChartPackages[];
  language: Lang;
  callback: Function;
  mapsApiKey: string;
}

interface GoogleChartsLoader {
  VersionSpecific: GoogleChartsLoaderVersion;
}

interface GoogleChartsLoaderVersion {
  load: any;
  makeCssUrl: any;
  setOnLoadCallback: any;
}
