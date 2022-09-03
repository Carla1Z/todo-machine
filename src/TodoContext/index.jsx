import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    //lo que antes se llamaba item, ahora se va a llamar todos
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // }
  };

  const deleteTodo = (text) => {
    //busco la posicion/index que el mismo texto que se esta recibiendo como parametro
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    //creo una copia de los todos
    const newTodos = [...todos];

    //el 1 significa que quiero eliminar 1 todo
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }}
    >
      {/* va a envolver a toda la aplicacion */}
      {props.children}
    </TodoContext.Provider>
  );
}

<TodoContext.Consumer></TodoContext.Consumer>;

export { TodoContext, TodoProvider };
