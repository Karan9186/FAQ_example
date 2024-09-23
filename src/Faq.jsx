import { useState } from "react";
import { data } from "./data_ob";

function Faq() {
  let [items,setitems]=useState(data[0].id)

  let allitems_var=data.map((v,i)=>{
    
  let faq={
   v,
   i,
   items,
   setitems
  }
    return(
      <AllItems faqs={faq}  key={i}/>
    )
  })
  return (
    <>
      <h1>this is FQA with using props</h1>

      <div className="continaer1">
        <div>
          <h1>FAQ List</h1>
        </div>

      {allitems_var}
      </div>
    </>
  );
}

function AllItems({faqs}){
  let {v,i,items,setitems}=faqs
  return(
    <>
    <div className="ques_con" key={items.id}>
        <button className="btn_ques" onClick={()=>setitems(v.id)}>
        <b>Q.{i+1}  </b> {v.quesion}
        </button>
        <p className={`ans_p ${(items===v.id)? 'd_block' : ''}`}>
           {v.answer}
        </p>
      </div>
    </>
  )
}
export default Faq;
