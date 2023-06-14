import "./BCRight.css";

function BCRight() {
  return (
    <div class="bottom-container__right">
      <div class="box">
        <div class="header-container">
          <h3 class="section-header">Your Ma'aser Balance</h3>
        </div>
        <h1 class="price">
          $7823<span class="price-currency">(USD)</span>
        </h1>
        <p>From Jan 01, 2023 to May 24, 2023</p>
        <div class="button-box">
          <button class="btn btn-purple">
            //
            <span>Donate</span>
          </button>
        </div>
      </div>
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
    </div>
  );
}
export default BCRight;
