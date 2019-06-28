import * as React from 'react';
import ReactDOM from 'react-dom';
import PieChart from './component/Charts/PieChart';
import GaugeChart from './component/Charts/GaugeChart';
import ComboChart from './component/Charts/ComboChart';
import GeoChart from './component/Charts/GeoChart';
import AreaChart from './component/Charts/AreaChart';
import BarChart from './component/Charts/BarChart';

const App = () => {
  const arrayToData: [string, string | number][] = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ];
  return (
    <div>
      ㅁㄴㅇㄹ
      <PieChart
        dataTable={arrayToData}
        nodeInfo={{
          idName: 'pie_charts'
        }}
      />
      <GaugeChart
        dataTable={arrayToData}
        nodeInfo={{
          idName: 'gauge_charts'
        }}
      />
      <ComboChart
        dataTable={arrayToData}
        nodeInfo={{
          idName: 'combo_charts'
        }}
      />
      <AreaChart
        dataTable={arrayToData}
        nodeInfo={{
          idName: 'area_charts'
        }}
      />
      <BarChart
        dataTable={arrayToData}
        nodeInfo={{
          idName: 'bar_charts'
        }}
      />
      <GeoChart
        dataTable={[
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]}
        nodeInfo={{
          idName: 'geo_charts',
          wrapperStyle: {
            width: '50%'
          }
        }}
      />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
