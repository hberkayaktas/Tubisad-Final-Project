import {useState} from "react";
import { useDispatch } from "react-redux";
import {changeActiveFilter} from "../../../Redux/todosSlice";

function Search() {
      const dispacth = useDispatch();
      const [filter, setFilter] = useState("");
      const handleSubmit = (e) => {
            e.preventDefault();
            
                  dispacth(changeActiveFilter({filter}));
              
              // console.log({id:nanoid(), content,status:"Added",color:colorSheme});
              // console.log(renk);
            
      }
  return (
    <div className="row justify-content-center">
      <form className="row justify-content-center" onSubmit={handleSubmit}>
      <input type="text" className="form-control w-50" value={filter} placeholder="Search" onChange={(e) => setFilter(e.target.value)} onKeyUp={handleSubmit}/>
      <button className=" ms-1 btn btn-bg-green col-md-1">Ara</button>
      </form>
    </div>
  );
}

export default Search;
