import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import { getPositionOfLineAndCharacter } from "typescript";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    const snake = new Snake();
    console.log(snake);

    snake.move();
    console.log(snake);

    /*    snake.turn();
     */
    console.log(snake);
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
