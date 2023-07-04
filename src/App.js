import store from "./store/store";
import { addTask, completedTask, fetchTodo, removeTask } from "./store/task";

function App() {
  store.subscribe(() => {
    console.log("Updated", store.getState());
  });

  store.dispatch(addTask("Task 1"));
  store.dispatch(addTask("Task 2"));
  console.log(store.getState(), "@store");

  store.dispatch(completedTask(1));
  console.log(store.getState(), "@update");

  store.dispatch(removeTask(1));
  console.log(store.getState(), "@store after remove");

  store.dispatch(fetchTodo());
  return (
    <div className="App">
      <h1>Redux Fundmental</h1>
    </div>
  );
}

export default App;
