import React, {useState} from "react";
import './style.scss'
import {Tooltip} from "react-bootstrap";

const Counter = ({
                     shareCount,
                     setShareCount,
                     eachShare,
                 }) => {
    const [isValid,setIsValid]=useState(true);
    const increaseCount = () => {
        setShareCount(shareCount + 1);
    };

    const decreaseCount = () => {
        setShareCount(shareCount - 1);
    };
function changeVal(val){
    const pattern=/^[0-9]+$/;
    if (pattern.test(val) && val>=0){
        setIsValid(true);
        setShareCount(val)
    }
    else {
        setIsValid(false);

    }

    console.log(val,isValid)
}
    return (
        <div className=" m-auto  justify-content-center">
            <div className=" " style={{display: "ruby"}}>
                <p className=" mx-2">تعداد سهم</p>
                <div className="" style={{display: "ruby"}}>
                    <button className="btn btn-outline" onClick={increaseCount}>
                        +
                    </button>
                    <div className="form-group">
                        {!isValid && (
                            <Tooltip title="مقدار عددی معتبر وارد کنید" >

                            </Tooltip>
                        )}
                    <p className={"my-input text-center px-2"} contentEditable={'true'} style={{margin: "0 10px",minWidth:"1rem" }}
                       role="input"

                       onInput={e=>changeVal(e.target.textContent)}



                    >{shareCount}



                    </p>

                    </div>


                    <div className={` ${isValid?"d-none":""}`}>

                    </div>
                    <button
                        className="btn btn-outline"
                        onClick={decreaseCount}
                        disabled={shareCount === 0}
                    >
                        -
                    </button>
                </div>
            </div>
            <div style={{display: "ruby"}} className={'pe-5'}>

                <p className="ps-2">جمع سهم</p>
                <div className="share-box rounded border-1 px-2 "
                >
                    {/*<label htmlFor="count" className="form-label">مقدار</label>*/}
                    {/*<input type="text" className="form-control d-flex    " id="count" placeholder="تومان" value={(shareCount*eachShare).toLocaleString()} required=""/>*/}
                    {/*<div className="invalid-feedback">*/}
                    {/*    مقدار معتبر استفاده کنید*/}
                    {/*</div>*/}
                    <p className='m-0 my-2'>
                        {(shareCount * eachShare).toLocaleString()}
                        <p className="text-ligh opacity-50 d-inline me-2">تومان</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
