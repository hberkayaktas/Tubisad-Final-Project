import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../../Redux/todosSlice";

function Note_Form() {
  const [content, setContent] = useState("");
  const [colorSheme, setColorSheme] = useState("bg-blue");
  const dispactch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content !== "") {
      dispactch(
        addNote({ id: nanoid(), content, status: "Added", color: colorSheme })
      );
      setContent("");
      setColorSheme("bg-blue")
      // console.log({id:nanoid(), content,status:"Added",color:colorSheme});
      // console.log(renk);
    }
  };
  return (
    <div className="row justify-content-center">
      <div className="row justify-content-center">
        <form className="my_form" onSubmit={handleSubmit}>
          <br />
          <div className="my_row note_input">
            <textarea
              cols={30}
              rows={10}
              placeholder={"Type here...."}
              onChange={(e) => setContent(e.target.value)}
              value={content}
            >
            </textarea>
            <button className="my_btn btn-bg-green" type="submit">
              Kaydet
            </button>
          </div>          
          <div className="colordot">
            <span className="colorpicker">
              <input
                type="radio"
                name="renk"
                value={"bg-blue"}
                onChange={(e) => setColorSheme(e.target.value)}
                checked={colorSheme === "bg-blue" && true }
              />
              <label htmlFor="renk" className="my_label bg-blue" />
            </span>
            <span className="colorpicker">
              <input
                type="radio"
                name="renk"
                value={"bg-orange"}
                onChange={(e) => setColorSheme(e.target.value)}
                checked={colorSheme === "bg-orange" && true }
              />
              <label htmlFor="renk" className="my_label bg-orange" />
            </span>
            <span className="colorpicker">
              <input
                type="radio"
                name="renk"
                value={"bg-pink"}
                onChange={(e) => setColorSheme(e.target.value)}
                checked={colorSheme === "bg-pink" && true }
              />
              <label htmlFor="renk" className="my_label  bg-pink" />
            </span>
            <span className="colorpicker">
              <input
                type="radio"
                name="renk"
                value={"bg-purple"}
                onChange={(e) => setColorSheme(e.target.value)}
                checked={colorSheme === "bg-purple" && true }
              />
              <label htmlFor="renk" className="my_label bg-purple" />
            </span>
            <span className="colorpicker">
              <input
                type="radio"
                name="renk"
                value={"bg-green"}
                onChange={(e) => setColorSheme(e.target.value)}
                checked={colorSheme === "bg-green" && true }
              />
              <label htmlFor="renk" className="my_label bg-green" />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Note_Form;
