import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter();
    const Items = [
        {
            name: 'Services',
            list: [
                'Web App Development',
                'Desktop App Development',
                'Mobile App Development',
                'Cloud App Development',
                'Embedded Software Development',
                'UX/UI Services',
                'DevOps Services',
                'QA Services'
            ]
        },
        {
            name: 'Solutions',
            list: [
                'For Startups',
                'IoT Development',
                'Marketplace Development',
                'App Development'
            ]
        },
        {
            name: 'Industries',
            list: [
                'E-commerce',
                'Healthcare',
                'Legal',
                'Logistics',
                `Banking ${'&'} Finance`,
                'Media',
                'Gambling',
                'Education',
                'Restaurant'
            ]
        },
        {
            name: 'Technologies',
            list: [
                'React.js',
                'Typescript',
                'Javascript',
                'Python',
                'Angular',
                'Vue.js',
                'React Native'
            ]
        },
        {
            name: 'Company',
            list: [
                'Services',
                'Projects',
                'Teams',
                'Jobs',
                'Blog',
                'Contact'
            ]
        }
    ]

    const social = [
        {
            name: "facebook",
            link: "https://www.facebook.com/Jason-Makes-Websites-101997348569309"
        },
        {
            name: "twitter",
            link: "https://twitter.com/HubcapFounder"
        },
        {
            name: "instagram",
            link: "https://www.instagram.com/alien4hire12/"
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/jason-maynard-54b538ba/"
        }
    ]

    const socialMedia = (e, href) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <React.Fragment>
            <div className="footer-container">
                <div className="inner-footer">
                    {Items.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>{item.name}</p>
                                {item.list.map((word, index) => {
                                    return (
                                        <p key={index} className="sub-footer-links">{word}</p>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className="footer-big-container">
                    <div className="social-media-footer">
                        <div>
                            <h4>Follow us</h4>
                            <div className="social-container">
                            {social.map((item, index) => (
                                <a href={item.link} onClick={(e) => socialMedia(e, item.link)}>
                                <div key={index} className="social-icons" style={{pointerEvents: 'none'}}>
                                    <i className={`fa fa-${item.name}`} style={{fontStyle: 'normal', cursor: 'normal', pointerEvents: 'none'}}/>
                                </div>
                                </a>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="footer-text">
                        © 2015 - {new Date().getFullYear()} Jason® LLC.
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;