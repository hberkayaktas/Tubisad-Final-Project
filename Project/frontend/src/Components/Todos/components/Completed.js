import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../../Redux/todosSlice";
function Completed() {
      const dispactch = useDispatch();
  const items = useSelector((state) =>
    state.notes.items.filter((item) => item.status === "Completed")
  );
  const activeFilter = useSelector((state) => state.notes.activeFilter);

  const filtered =  items.filter((item) => {
    var ifade = new RegExp(activeFilter.filter,"gi");
    if(ifade.test(item.content)){
      return item;
    }}
    )
 // console.log(items);
  return (
    <div className="col_md_4 x_center f_wrap">
      <h3>Bitirilenler</h3>
      <br />

      <div className="my_col w_100 x_center">
        {filtered.map((item,index) => (
          <div key={item.id}  className={`${item.color} p_4 w_75 mx_25 mb_5px alert wow bounce animated`}  data-wow-delay={`${index*3}s`} >
            {item.content}
            <button className="btn_status" onClick={() => dispactch(toggle({ id: item.id }))}>
              <i className="fa-solid fa-circle-check" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Completed;
