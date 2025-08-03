import "./App.css";
import Pages from "./components/Pages";
import { Routes, Route } from "react-router-dom";

function App() {
   return (
      <>
         <Routes>
            <Route exact path="/" element={<Pages />} />
         </Routes>
      </>
   );
}
export default App;
