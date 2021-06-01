import React from 'react'

const Reviews = () => {
    const data = [
        {
            stars: 5,
            content: `The speed and quality of the work Jason provided really impressed me.`,
            date: `MAY 20, 2019`,
            quality: 5.0,
            schedule: 4.5,
            cost: 5.0,
            refer: 5.0
        },
        {
            stars: 5,
            content: `Hired them for a few web projects. Great work, and very knowlegable`,
            date: `AUG 20, 2021`,
            quality: 5.0,
            schedule: 5.0,
            cost: 5.0,
            refer: 5.0
        },
        {
            stars: 5,
            content: `Had the highest quote I received, but after receiving the work, it was worth it.`,
            date: `JAN 29, 2020`,
            quality: 5.0,
            schedule: 5.0,
            cost: 5.0,
            refer: 5.0
        },
    ]


    return (
        <React.Fragment>
            <div className="review-container">
                <h1 className="review-title">See what our clients are saying</h1>
                <div className="review-box-container">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="review-box">
                                <div className="inner-review-box">
                                    <div className="review-left">
                                        <p id="reviews-p">Reviews</p>
                                        <p>{`"${item.content}"`}</p>
                                        <p id="review-date">{item.date}</p>
                                    </div>
                                    <div className="review-right">
                                        <div className="right-side" id="star-count">
                                            <p id="star-rating">{item.stars.toFixed(1)}</p>
                                            <div className=" card-stars">
                                            <i aria-hidden={true} className=" fa fa-star mr-1" style={{color: '#ff7800', fontStyle: 'normal'}}></i>
                                            <i aria-hidden={true} className=" fa fa-star mr-1" style={{color: '#ff7800', fontStyle: 'normal'}}></i>
                                            <i aria-hidden={true} className=" fa fa-star mr-1" style={{color: '#ff7800', fontStyle: 'normal'}}></i>
                                            <i aria-hidden={true} className=" fa fa-star mr-1" style={{color: '#ff7800', fontStyle: 'normal'}}></i>
                                            <i aria-hidden={true} className=" fa fa-star" style={{color: '#ff7800', fontStyle: 'normal'}}></i>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                        <p className="review-title-1">Quality</p>
                                        <p className="rating-num">{item.quality.toFixed(1)}</p>
                                        </div>
                                        <div className="right-side">
                                        <p className="review-title-1">Schedule</p>
                                        <p className="rating-num">{item.schedule.toFixed(1)}</p>
                                        </div>
                                        <div className="right-side">
                                        <p className="review-title-1">Cost</p>
                                        <p className="rating-num">{item.cost.toFixed(1)}</p>
                                        </div>
                                        <div className="right-side">
                                        <p className="review-title-1">Willing to refer</p>
                                        <p className="rating-num">{item.refer.toFixed(1)}</p>
                                        </div>
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

export default Reviews;