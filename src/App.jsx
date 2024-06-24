import "./App.css";

import Pages from "./components/Pages";
import Pdf from "./components/Pdf"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route  exact path="/"  element={<Pages/>}/>
        <Route path="/CV" element={<Pdf/>}/>
      </Routes>
    </>
  );
}
export default App;
