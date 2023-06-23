import React,{useState} from 'react';
import IntroImg from '../../assests/OIP.jpg'
import './x.css'
import MainPageHeader from './header/header';
import MainPageModal from '../mainPageModal/newPageModal';
export default function MainPageIntro(props) {
const [showModal, setShowModal] = useState(false);
return (
<div className='intro-div'>
<MainPageHeader setShowModal={setShowModal} showModal={showModal}/>
<MainPageModal setShowModal={setShowModal} showModal={showModal} />
<img src={IntroImg} alt="intro" className='img-intro' />

</div>



);



}
