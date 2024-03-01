import "./App.css";
import Bars from "./components/Bars";
import Card from "./components/Card";
import { cards, charts } from "./data";

function App() {
  return (
    <div className="App">
      <h2 className="comp-heading">Company Metrics</h2>
      <div className="card-div">
        {cards.map((ele) => (
          <Card data={ele} />
        ))}
      </div>

      <div className="bars">
        <div>
          <div className="chart-titles"></div>
          <div className="chart">
            <Bars data={charts.data1} />
          </div>
        </div>

        <div>
          <div className="chart-titles"></div>
          <div className="chart">
            <Bars data={charts.data2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
