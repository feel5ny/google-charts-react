import { ChartLoadSettings } from "../type/googleChartObject/googleChartObject";

export const getPackageType = ({
  packages,
  language,
  callback,
  mapsApiKey
}: ChartLoadSettings): ChartLoadSettings => {
  const packageType: ChartLoadSettings = {
    packages: [...packages]
  };
  switch (true) {
    case !!language:
      packageType.language = language;
    case !!callback:
      packageType.callback = callback;
    case !!mapsApiKey:
      packageType.mapsApiKey = mapsApiKey;
      break;
    default:
      break;
  }
  return packageType;
};
