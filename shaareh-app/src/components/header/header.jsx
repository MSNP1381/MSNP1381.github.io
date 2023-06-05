import react from "react";
import './header.css'
import Elmos  from '../../assets/download.png';
import Shaareh  from '../../assets/logo512.png';
export default function HeaderComponent() {
  return (
    <div className="header">
      <img src={Elmos} alt="Logo 1" className="logo" />
      <h1 className="title">پیکرهٔ رویاها</h1>
      <img src={Shaareh} alt="Logo 2" className="logo" />
    </div>
  );
}
