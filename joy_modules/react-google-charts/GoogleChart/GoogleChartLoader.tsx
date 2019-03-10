import * as React from "react";
import * as Script from "react-load-script";
import { Google } from "./type/googleChartObject/googleChartObject";

export interface windowWithGoogle extends Window {
  google?: Google;
}

namespace GoogleChartLoader {
  export interface IProps {
    onLoad: (google: Google) => void;
    onError: Function;
  }
}
class GoogleChartLoader extends React.Component<GoogleChartLoader.IProps> {
  constructor(props: GoogleChartLoader.IProps) {
    super(props);
  }

  handleLoadScript = () => {
    const windowWithGoogle = window as windowWithGoogle;
    if (windowWithGoogle.google) {
      this.props.onLoad(windowWithGoogle.google);
    } else null;
  };

  handleErrorScript = () => this.props.onError();

  render() {
    return (
      <Script
        url="https://www.gstatic.com/charts/loader.js"
        onLoad={this.handleLoadScript}
        onError={this.handleErrorScript}
      />
    );
  }
}
export default GoogleChartLoader;
