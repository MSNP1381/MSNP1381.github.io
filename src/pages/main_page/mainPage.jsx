// import "antd/dist/antd.css";
import {useState} from "react";
import Counter from "../../components/counter/counter";

const MainPage = (props) => {
    const [shareCount,setShareCount]=useState(0);
    const [eachShare,setEachShare]=useState(40000);
    return (
        <div className='container'>
            <div className="row">

                <div className="col-md-6 order-md-1 d-flex justify-content-center">
                    <img
                        src="https://placehold.co/400"
                        alt="Image"

                        className="img-fluid rounded-3 m-auto"
                    />
                </div>
                <div className="col-md-6 order-md-2 d-flex justify-content-center flex-column">
                    <Counter eachShare={eachShare} shareCount={shareCount} setShareCount={setShareCount} />
                    <div className="d-grid justify-content-center align-content-center">
                        <button className="btn  mx-auto btn-lg   " onClick={()=>{console.log(eachShare*shareCount)}}>پرداخت</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
