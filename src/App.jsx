import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DynamicsValues from "./components/DynamicValues";
import ConditionalValues from "./components/ConditionalValues";
import DefaultNameCom from "./components/DefaultNameCom";
import { Header, NameCom, Footer } from "./components/NameCom";
import { Looping } from "./components/Looping";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Looping/>
      {/* <DynamicsValues /> */}
      {/* <ConditionalValues /> */}
      {/* <DefaultNameCom/> */}
      {/* <Header />
      <NameCom />
      <Footer />   */}
      {/* <div>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div> */}
    </>
  );
}

export default App;
