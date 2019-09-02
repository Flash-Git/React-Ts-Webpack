import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

interface ITodo {
  text: string;
  complete: boolean;
}

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  type FormElem = React.FormEvent<HTMLFormElement>;

  const submit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>Hello</h1>
      <form onSubmit={submit}>
        <input
          type="test"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <div key={index}>{todo.text}</div>
        ))}
      </section>
    </Fragment>
  );
};

const root = document.getElementById("root");

ReactDOM.render(<App />, root);

export default App;
