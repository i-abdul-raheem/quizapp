import { Routes, Route } from "react-router-dom";
import { Components, Dashboard, Landing } from "./pages";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/components" element={<Components />} />
    </Routes>
  );
};

export default App;
