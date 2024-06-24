import "./App.css";

import Pages from "./components/Pages";
import Pdf from "./components/Pdf"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={<Pages/>}/>
        <Route path="/CV" Component={<Pdf/>}/>
      </Routes>
    </>
  );
}
export default App;
