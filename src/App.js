import Home from "./routes/Home.js";
import TodoHome from "./routes/TodoHome.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todohome/:user" element={<TodoHome />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
