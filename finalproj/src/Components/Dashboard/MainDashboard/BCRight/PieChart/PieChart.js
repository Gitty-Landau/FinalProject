import "./PieChart.css";

function PieChart() {
  return (
    <div class="box spending-box">
      <div class="header-container">
        <h3 class="section-header">Donations by category</h3>
      </div>
      <div class="pie-chart">
        <div id="my-pie-chart"></div>
      </div>
      <div class="overall-spending">
        <h4>Overall</h4>
        <span>$583,530.00</span>
      </div>
      <div class="pie-chart__labels">
        <div class="pie-chart__labels-item">
          <div class="label">
            <div class="label__color first"></div>
            Hachnasas Kallah
          </div>
          $8.000.00
        </div>
        <div class="pie-chart__labels-item">
          <div class="label">
            <div class="label__color second"></div>
            Helping the Poor
          </div>
          $2.130.00
        </div>
        <div class="pie-chart__labels-item">
          <div class="label">
            <div class="label__color third"></div>
            Medical Institutions
          </div>
          $1.510.00
        </div>
        <div class="pie-chart__labels-item">
          <div class="label">
            <div class="label__color fourth"></div>
            Torah Institutions
          </div>
          $2.245.00
        </div>
      </div>
    </div>
  );
}
export default PieChart;
