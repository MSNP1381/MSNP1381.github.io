import "./App.css";
import HeaderComponent from "./components/header/header";
import VidCardComponent from "./components/vidCard/vidCard";
import AppFooter from "./components/footer/footer";
import { mainPage } from "./assets/data";
import { Row, Col } from "antd";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <HeaderComponent></HeaderComponent>
      <Row style={{padding:"4px",margin:'3px'}} gutter={[16,16]}>
        {console.log(mainPage)}
        {mainPage.map((x) => (
          <Col span={8}>
            <VidCardComponent src={x.src} title={x.title} text={x.text} />
          </Col>))}
      </Row>
      <footer>
<AppFooter></AppFooter>
      </footer>
    </div>
  );
}

export default App;
