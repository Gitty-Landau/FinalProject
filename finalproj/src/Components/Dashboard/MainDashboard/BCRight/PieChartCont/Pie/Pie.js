import "./Pie.css";
import { PieChart } from "react-minimal-pie-chart";
function Pie() {
  return (
    <>
      <div class="pie-chart">
        <div id="my-pie-chart">
          <PieChart
            data={[
              { title: "Helping the Poor", value: 18, color: "#ffacc8" },
              { title: "Medical Institutions", value: 10, color: "#cc6ff8" },
              { title: "Torah Institutions", value: 17, color: "#7c5cfc" },
              { title: "Hachnasas Kallah", value: 55, color: "#eb7ca6" },
            ]}
          />
        </div>
      </div>
      <div class="overall-spending">
        <h4>Overall</h4>
        <span>$583,530.00</span>
      </div>
    </>
  );
}
export default Pie;
