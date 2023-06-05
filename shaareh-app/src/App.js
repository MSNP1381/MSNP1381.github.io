import "./App.css";
import HeaderComponent from "./components/header/header";
import VidCardComponent from "./components/vidCard/vidCard";
import { mainPage } from "./assets/data";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent></HeaderComponent>
        <div className="video-container">
          {mainPage.map(x=>
                      <VidCardComponent 
                      src={x.src}
                      title={x.title}
                      text={x.text}
                      />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
