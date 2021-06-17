import React, {useState} from 'react';
import Image from 'next/image';
import {useSpring, useTransition, animated} from 'react-spring';

const Icon = () => {
    const [hover, setHover] = useState(false);
    const Spring = useSpring()
    const Items = [
        {
            name: 'REACT.JS WEB APP DEVELOPMENT',
            desc: `
            Praised by dozens of top tech companies for our web app development, we consider React.js among the most effective tools to build web applications. 
            `,
            icon: 'icon-1.png'
        },
        {
            name: `USER EXPERIENCE ${'&'} DESIGN`,
            desc: `
            We build user friendly web apps designed to be simple yet highly engaging to the user. 
            `,
            icon: 'icon-2.png'
        },
        {
            name: `MOBILE ${'&'} RESPONSIVE WEB APPS`,
            desc: `
            Our expert engineers have compiled a massive database of "up to code" components and features which can be quickly customized and added to your site. 
            `,
            icon: 'icon-4.png'
        },
        {
            name: `POST RELEASE SUPPORT`,
            desc: `
            Technology is ever evolving, but we will still be there to support the growing needs of your mobile or web app. 
            `,
            icon: 'icon-3.png'
        },

    ]

    //transform: `scale(${hover ? 1.2 : 1})`
    // boxShadow: hover ? hoverBoxShadow : normalBoxShadow
    return (
        <div className="next-box">
            <div className="inner-icontainer">
                {Items.map((item, index) => {
                    return (

                        <div 
                            key={index} 
                            className="icon-box-container" 
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            >
                        <div id="right-corner-img">
                        <Image src="/img/icons/icon-5.png" width={100} height={100} />
                        </div>
                        <Image src={`/img/icons/${item.icon}`} width={50} height={50} />
                        <h2 className="card-title-1">{item.name}</h2>
                        <p className="card-text-1">{item.desc}</p>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Icon;