import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Translator from "./pages/Translator";
import Generator from "./pages/Generator";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">

        <nav className="bg-blue-600 text-white p-4 flex gap-4 justify-center">
          <Link to="/">Translator</Link>
          <Link to="/generator">Generator</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Translator />} />
          <Route path="/generator" element={<Generator />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;