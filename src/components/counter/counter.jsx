import React, {useState} from "react";
import './style.scss'
import {Tooltip} from "react-bootstrap";

const Counter = ({
                     shareCount,
                     setShareCount,
                     eachShare,
                 }) => {
    const [isValid, setIsValid] = useState(true);
    const increaseCount = () => {
        setShareCount(shareCount + 1);
    };

    const decreaseCount = () => {
        setShareCount(shareCount - 1);
    };

    function changeVal(val) {
        const pattern = /^[0-9]+$/;
        if (pattern.test(val) && val >= 0) {
            setIsValid(true);
            setShareCount(val)
        } else {
            setIsValid(false);

        }

        console.log(val, isValid)
    }

    return (
        <div className="row my-auto d-flex justify-content-center mt-4 mt-md-auto mb-4 mb-md-auto">
            <div className="col-md-6 d-flex flex-row  justify-content-center" >
                <p className=" mx-2 my-auto">تعداد سهم</p>
                <div className="d-flex flex-row">
                    <button className="btn btn-outline" onClick={increaseCount}>
                        +
                    </button>
                    <div className="form-group">
                        {!isValid && (
                            <Tooltip title="مقدار عددی معتبر وارد کنید">

                            </Tooltip>
                        )}
                        <p className={"my-input text-center px-2"} contentEditable={'true'}
                           style={{margin: "0 10px", minWidth: "1rem"}}
                           role="input"
                           onInput={e => changeVal(e.target.textContent)}
                        >{shareCount}
                        </p>
                    </div>


                    <div className={` ${isValid ? "d-none" : ""}`}>
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
            <div className={'col-md-6 d-flex justify-content-center mt-3 mt-md-0'}>

                <p className="ps-2 my-auto">جمع سهم</p>
                <div className="share-box rounded border-1 px-2 "
                >
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
