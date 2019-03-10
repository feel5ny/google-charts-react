import { GoogleChartOptions } from "../type/googleChartObject/googleChartObjectOption";

export class googleChartOption {
  option: GoogleChartOptions;
  static GET: (option: GoogleChartOptions) => googleChartOption;

  constructor(_option: GoogleChartOptions) {
    this.option = _option;
  }
  public setOptions = () => this.option || {};
}

googleChartOption.GET = (option: GoogleChartOptions) =>
  new googleChartOption(option);
