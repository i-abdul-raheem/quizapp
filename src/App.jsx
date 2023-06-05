import { Routes, Route } from "react-router-dom";
import { Components, Dashboard, Landing, Quiz, SingleTest } from "./pages";
import "./App.css";
import { Main } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/components" element={<Components />} />
      <Route path="/test-info" element={<SingleTest />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/admin" element={<Main />} />
    </Routes>
  );
};

export default App;
