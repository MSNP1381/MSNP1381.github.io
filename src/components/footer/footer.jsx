import msnp from "../../assests/msnp.png";
import shaareh from "../../assests/shaareh.png";
function Footer(props) {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary text-light-emphasis">
          
            انجمن علمی شارح
            {" "}
          {new Date().toLocaleDateString("fa-IR", {
            year: "numeric",
          })}
        </p>
        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          dideo-checked="true"
        >
          <img src={shaareh} className="bi me-2 border rounded p-1 bg-black bg-opacity-50" style={{filter:"invert() "}} width={50} >
           
          </img>
        </a>
        <ul className="nav col-md-4 justify-content-end">
         ساخته شده توسط <a href="https://www.linkedin.com/in/msnp1381/" className="px-1"><img src={msnp} alt="msnp " style={{width:"1.5em"}}></img></a>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
