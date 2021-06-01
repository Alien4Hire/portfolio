import React from 'react';

const Work = () => {
    const data = [
        {
            name: `Restaurants/
            Online Ordering`,
            image: `DiverciTea.png`,
        },
        {
            name: `Ecommerce`,
            image: `AngelsEyewear.png`,
        },
        {
            name: `Marketing`,
            image: `SEO.png`,
        },
        {
            name: `Carcare/ 
            Transportation`,
            image: `vohnt-carcare.png`,
        },
        {
            name: `Artwork/ 
            Installations`,
            image: `art-instalation.png`,
        },
        {
            name: `Banking`,
            image: `banking.png`,
        },
        {
            name: `Construction/ 
            
            Trade Companies`,
            image: `garage-service.png`,
        },
        {
            name: `Accounting/ 
            Financial Services`,
            image: `Financial-services-design.png`,
        },
    ]
    return (
        <React.Fragment>
            <div className="portfolio-outer">
                <h2 className="text-title-portfolio">Industries We Impact</h2>
                <div className="portfolio-inner">
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="work-box">
                                    <img src={`/img/work/${item.image}`} className={index === 2 ? "background-image-wide" : "background-image"}/>
                                    <div className="absolute-container">
                                    <h4 className="name-overlay">{item.name}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Work;