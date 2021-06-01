import React from 'react';
import Typing from '../custom/Typing'
import Nav from '../navbar'
import Link from 'next/link';


const Header = () => {
    return (
        <React.Fragment>
            <Nav />
            <div style={{width: '160vw', height: '100vh', backgroundColor: '#000', overflow: 'hidden', display: 'grid', justifyItems: 'center'}}>
            <video id="header-video" autoPlay loop muted poster={"/img/poster.png"}>
                    <source src={"/video/saturn.mp4"} type='video/mp4' />
                    <source src={"/video/saturn.mp4"} type="video/ogg" /> 
                    {/* <source src={"/video/1058150299-preview.mp4"} type='video/mp4' />
                    <source src={"/video/1058150299-preview.mp4"} type="video/ogg" />  */}
            </video>
            <img id="header-img" src={"/img/poster.png"} alt={"background-image"} />

            </div>
            <div className="typing-container" style={{backgroundColor: '#000', height: '100vh', color: '#fff'}}>
                <Typing 
                    home={true}
                    // pre={"Hi,~I'm Jason,~Web Developer!"}
                    title={`Hi,~I'm Jason,~Web Developer!`}
                    subtitle={"Full Stack Developer / React Expert"}
                />
            </div>
            <Link href="#technologies">
            <div className="wwd-arrows">
                <i className="fa fa-chevron-down" id="arrow-12" style={{fontStyle: 'normal', color: '#949494'}}/>
                <i className="fa fa-chevron-down" id="arrow-22" style={{fontStyle: 'normal'}} />
                <p style={{cursor: 'default'}} className="below-text-header">What We Do</p>
            </div>
            </Link>
        </React.Fragment>
    )
}

export default Header;