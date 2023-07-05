import React from "react";
import "./App.scss";
// import MainPage from "./pages/main_page/mainPage";
import MainPage from "./pages/main_page/mainPage";
import Header from "./components/header/header";




function App() {
  return (
      <div className="">
        <Header></Header>
          <MainPage />
      </div>

  );
}

export default App;
