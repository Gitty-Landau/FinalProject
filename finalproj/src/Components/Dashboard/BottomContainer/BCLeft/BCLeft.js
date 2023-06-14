import "./BCLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
function BCLeft() {
  return (
    <div class="bottom-container__left">
      <div class="box total-box">
        <div class="total-box__left">
          <div class="header-container">
            <h3 class="section-header">Total Income</h3>
            <i class="fa-solid fa-square-dollar"></i>
            //
          </div>
          <h1 class="price">
            $583,530.00<span class="price-currency">(USD)</span>
          </h1>
          <p>
            <span class="percentage-increase">20%</span> increase compared to
            last year
          </p>
        </div>
        <div class="total-box__right">
          <div class="header-container">
            <h3 class="section-header">Total Donations</h3>
            //
          </div>
          <h1 class="price">
            $50,530.00<span class="price-currency">(USD)</span>
          </h1>
          <p>
            <span class="percentage-decrease">10%</span> decrease compared to
            last year
          </p>
        </div>
      </div>
      <div class="box transaction-box">
        <div class="header-container">
          <h3 class="section-header">Donation History</h3>
        </div>
        <table class="transaction-history">
          <tr>
            <th>Donations </th>
            <th>Date// </th>
            <th>Amount //</th>
            <th>Category //</th>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon icon={faCircleDollarToSlot} />
              Yad Eliezer
            </td>
            <td>Jan 01,2023</td>
            <td>$2,000.00</td>
            <td>// Helping the Poor</td>
          </tr>
          <tr>
            <td>
              {" "}
              <FontAwesomeIcon icon={faCircleDollarToSlot} />
              Kollel Kever Rachel
            </td>
            <td>Jan 04,2022</td>
            <td>$2,000.00</td>
            <td>// Torah Institutions</td>
          </tr>
          <tr>
            <td>
              {" "}
              <FontAwesomeIcon icon={faCircleDollarToSlot} /> Likrat Kallah
            </td>
            <td>Jan 06,2023</td>
            <td>$2,000.00</td>
            <td>// Hachnasas Kallah</td>
          </tr>
        </table>
        <div class="footer-container ">
          <button class="btn btn-white ">See More..</button>
        </div>
      </div>
    </div>
  );
}

export default BCLeft;
