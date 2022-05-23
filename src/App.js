import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Developers } from "./components/views/Developers";
import { Developer } from "./components/views/Developer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Developers />} />
        <Route path="/developers/:id" element={<Developer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
