import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <h1>My To-Do List</h1>

        <TodoList />
        <Footer />
      </div>
    </>
  );
}

export default App;
