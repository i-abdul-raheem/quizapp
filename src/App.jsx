import { Routes, Route } from "react-router-dom";
import { Components, Dashboard, Landing, SingleTest } from "./pages";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/components" element={<Components />} />
      <Route path="/test-info" element={<SingleTest />} />
    </Routes>
  );
};

export default App;
