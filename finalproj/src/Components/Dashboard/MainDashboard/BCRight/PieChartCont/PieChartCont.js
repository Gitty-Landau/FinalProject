import "./PieChartCont.css";
import LabelArea from "./LabelArea/LabelArea";
import Pie from "./Pie/Pie";
function PieChartCont() {
  return (
    <>
      <div class="box spending-box">
        <div class="header-container">
          <h3 class="section-header">Donations by category</h3>
        </div>
        <Pie></Pie>
        <LabelArea></LabelArea>
      </div>
    </>
  );
}
export default PieChartCont;
