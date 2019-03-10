import { Google } from "../type/googleChartObject/googleChartObject";
import { ChartName } from "../type/googleChartDefaultData";
import { DataTableMethod } from "../../../../joy_modules/react-google-charts/type/reactGoogleChart";

export class googleChartDataTable {
  dataTable: any;
  private google: Google | null;
  private chartName: ChartName;
  static GET: (
    dataTable: any,
    google: Google | null,
    chartName: ChartName
  ) => googleChartDataTable;

  constructor(_dataTable: any, _google: Google | null, _chartName: ChartName) {
    this.dataTable = _dataTable;
    this.google = _google;
    this.chartName = _chartName;
  }
  public setDataTable = () => {
    return this.google
      ? this.google.visualization[DataTableMethod[this.chartName]](
          this.dataTable
        )
      : null;
  };
}

googleChartDataTable.GET = (
  dataTable: any,
  google: Google,
  chartName: ChartName
) => new googleChartDataTable(dataTable, google, chartName);
