import "./App.css";
//import "./placement.css";

//component

import Search from "./components/Search";
import NoteForm from "./components/NoteForm";
import NotBegin from "./components/NotBegin";
import Begin from "./components/Begin";
import Completed from "./components/Completed";

function Todo() {
  return (
    <div className="m-0">
      <div className="row justify-content-center m-0 pt-1">
        <Search />
      </div>
      <div className="row m-0 mb-4">
        <NoteForm />
      </div>
      <div className="row  m-0">
        <div className="col-md-4"><NotBegin/></div>
        <div className="col-md-4"><Begin/></div>
        <div className="col-md-4"><Completed/></div> 
      </div>
    </div>
  );
}

export default Todo;
