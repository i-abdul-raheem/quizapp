import { Routes, Route } from "react-router-dom";
import { Components, Landing } from "./pages";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/components" element={<Components />} />
    </Routes>
  );
};

export default App;
