export interface GoogleChartOptions
  extends GoogleChartOptionsBasic,
    GoogleChartOptionsFonts,
    GoogleChartOptionsPie,
    GoogleChartOptionsClock,
    GoogleChartOptionsTitle {
  chartArea: GoogleChartOptionsChartArea;
  backgroundColor: string | GoogleChartOptionsBackgroundColor;
  colors: string[];
  enableInteractivity: boolean;
  forceIFrame: boolean;
  is3D: boolean;
  legend: GoogleChartOptionsLegend;
  tooltip: GoogleChartOptionsTooltip;
}

interface GoogleChartOptionsTooltip {
  ignoreBounds: boolean;
  isHtml: boolean;
  showColorCode: boolean;
  text: string;
  textStyle: GoogleChartOptionsTextStyleBasic;
  trigger: string;
}

interface GoogleChartOptionsPie {
  pieHole: number;
  pieStartAngle: number;
  pieSliceBorderColor: string;
  pieSliceText: "percentage" | "value" | "label" | "none";
  pieSliceTextStyle: GoogleChartOptionsTextStyleBasic;
  pieResidueSliceColor: string;
  pieResidueSliceLabel: string;
  slices: any;
  sliceVisibilityThreshold: number;
}
interface GoogleChartOptionsTitle {
  title: string;
  titleTextStyle: string;
}

interface GoogleChartOptionsClock {
  reverseCategories: boolean;
}

interface GoogleChartOptionsLegend {
  alignment: string;
  position: "bottom" | "labeled" | "left" | "none" | "right" | "top";
  maxLines: number;
  textStyle: GoogleChartOptionsTextStyle;
}

interface GoogleChartOptionsTextStyle extends GoogleChartOptionsTextStyleBasic {
  bold: boolean;
  italic: boolean;
}
interface GoogleChartOptionsTextStyleBasic {
  color: string;
  fontName: string;
  fontSize: number;
}
interface GoogleChartOptionsBasic {
  height: number;
  width: number;
}
interface GoogleChartOptionsFonts {
  fontSize: number;
  fontName: string;
}

type GoogleChartOptionsBackgroundColor = {
  stroke: string;
  strokeWidth: number;
  fill: string;
};
type GoogleChartOptionsChartArea = {
  backgroundColor: string | GoogleChartOptionsChartAreaBackgroundColor;
  left: number | string;
  top: number | string;
  width: number | string;
  height: number | string;
};
type GoogleChartOptionsChartAreaBackgroundColor = {
  stroke: string;
  strokeWidth: number;
};
