import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global-styles";
import "./App.css";
import About from "./pages/about/about";
import Buddy from "./pages/Buddy/Buddy";
import Home from "./pages/main/Main";

function App() {
  return (
    <>

      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buddy" element={<Buddy />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
