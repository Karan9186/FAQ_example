import { data } from "./data_ob";
import "./app.css";
import { useState } from "react";
import Faq from "./Faq";
function App() {
  let [ans, setans] = useState();
  return (
    <>
      <div className="continaer">
        <div>
          <h1>FAQ List</h1>
        </div>
        <div>
          {data.map((v, i) => {
            return (
              <div key={v.id}>
                {" "}
                <div className="ques_con">
                    <button className="btn_ques" onClick={() => setans(v.id)}>
                      Q{v.id}.{v.quesion}
                    </button>
                    <p className={`ans_p ${ans === v.id ? "d_block" : ""}`}>
                      Ans. {v.answer}
                    </p>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
      <br /><br /><br />
      <Faq />
    </>
  );
}

export default App;

function Show({ items }) {
  return <></>;
}
