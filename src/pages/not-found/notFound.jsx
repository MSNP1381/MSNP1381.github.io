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
                <td>گشتم جهان را، فی‌البحر و البر</td>
                <td>تو را ندیدم، در کجا و در کجا؟</td>
              </tr>
              <tr>
                <td>پرسیدم علما، و پیران ز دین</td>
                <td>که تو را دیده‌اند، در کجا و در کجا؟</td>
              </tr>
              <tr>
                <td>نگه کردم ستاره، نگه کردم مه</td>
                <td>که تو را دیدند، گفتندم نیستی</td>
              </tr>
              <tr>
                <td>شدم من و خسته شد دل، ز تو بی خبر</td>
                <td>شدم من و خسته شد دل، ز تو بی خبر</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

  );
}
export default NotFound;
