import IUST from "../../assets/iust.png"
function Header(props){

    return(


        <header className="d-flex justify-content-around py-3 mb-4 border-bottom">
            <a href="/"
               className="d-flex align-items-center mb-3 mb-md-0  link-body-emphasis text-decoration-none"
               >
                <img src="https://dummyimage.com/60" alt="heyat-logo" className='mx-2 rounded-2'/>
                <span className="fs-5 text-center">هیئت شهدای گمنام دانشگاه علم و صنعت ایران</span>
            </a>

            <img src={IUST} alt="iust_logo" className="  " height={60} style={{filter:"invert()"}}/>
        </header>
    )



}

export default Header;