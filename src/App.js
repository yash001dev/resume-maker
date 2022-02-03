import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex item-center space-x-4">
        <div className="shrink-0"></div>
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}

export default App;
