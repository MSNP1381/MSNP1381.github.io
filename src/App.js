import "./App.css";
import MainPage from "./pages/mainPage/mainPage";
// import Expriment from './expriment';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewVideo from "./pages/view_vid/viewVid";

function App() {
  return (
    <div className="h-100 w-100">
      <BrowserRouter>
        <Routes>
          {/* <Route path="exp" element={<Expriment />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="v/:id" element={<ViewVideo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
