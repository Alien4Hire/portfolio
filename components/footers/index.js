import React from 'react';

const Footer = () => {
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
            </div>
        </React.Fragment>
    )
}

export default Footer;