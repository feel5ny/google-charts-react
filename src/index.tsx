import * as React from "react";
import ReactDOM from "react-dom";
import ReactGoogleChart from "../joy_modules/react-google-charts/ReactGoogleChart";

const App = () => {
  return (
    <div>
      <ReactGoogleChart />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("app"));
