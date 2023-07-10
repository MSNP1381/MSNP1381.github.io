import notFoundSquaer from "../../assests/404.jpg";
import "./style.css";
function NotFound(props) {
  return (

    //   <img
    //     src={notFoundSquaer}
    //     alt="404"
    //     className="z-n1  my-auto min-between m-auto img-blur"
    //   />
      <div className=" d-flex vh-100 vw-100 justify-content-center my-bg" style={{backgroundImage:`url(${notFoundSquaer})`}}>
        <div style={{ top: "10%", textAlign: "center" }} className="z-0 position-absolute">
          <h2 className="text-light-emphasis ">صفحه مورد نظر یافت نشد</h2>
          <a href="/" className="link-info link-underline-info">
            به تارگاه بازگردیم <i class="bi bi-house-fill"></i>
          </a>
        </div>

        <div className="table-div fixed-bottom vanish">
          <div>
            <table className="fit-to-content text-light-emphasis mx-auto mb-5 fs-6">
              <tr>
                <td>گفتند یافت می‌نشود جُسته‌ایم ما</td>
                <td>گفت آنچه یافت می‌نشود آنم آرزو ست</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

  );
}
export default NotFound;
