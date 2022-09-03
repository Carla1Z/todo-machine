import React from "react";
import "./TodoItem.css";

function TodoItem(props) {


  const onDelete = () => {
    alert("Borraste el todo " + props.text);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        // llama al metodo onComplete
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete }>
        {/* llama al metodo onDelete, que le envia el texto a la funcion deleteTodo para que elimine ese preciso todo */}
        X
      </span>
    </li>
  );
}

export { TodoItem };
