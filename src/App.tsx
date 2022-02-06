import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("learn React"), new Todo("learn Typescript")];
  return (
    <div className='App'>
      <Todos items={todos} />
    </div>
  );
}

export default App;
