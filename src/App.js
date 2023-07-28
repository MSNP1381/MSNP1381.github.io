import "./App.css";
import MainPage from "./pages/mainPage/mainPage";
// import Expriment from './expriment';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewVideo from "./pages/view_vid/viewVid";
import MoreVid from "./pages/more_vid/moreVid";
import NotFound from "./pages/not-found/notFound";
import Footer from "./components/footer/footer";
import Tmp from "./tmp";
function App() {
  return (
    <div className="h-100 w-100">
      <BrowserRouter>
        <Routes>
          {/* <Route path="exp" element={<Expriment />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="v/:id" element={<ViewVideo />} />
          <Route path="p/:id" element={<MoreVid />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="tmp" element={<Tmp />} />
          <Route path="*" element={<Navigate to={'not-found'}></Navigate>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
