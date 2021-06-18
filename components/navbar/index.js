import React from 'react';
import Link from 'next/link'

const Nav = () => {
    const Items = [
        {
            name: 'Services',
            link: '/services'
        },
        {
            name: 'Projects',
            link: '/projects'
        },
        {
            name: 'Team',
            link: '/team'
        },
        {
            name: 'Jobs',
            link: '/jobs'
        },
        {
            name: 'Blog',
            link: '/blog'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
    ]
    return (
        <React.Fragment>
            <div className="menu-top">
                <div className="menu-list">
                    {Items.map((item, index) => {
                        return (
                            <div key={index} className="menu-text">
                                <Link href={item.link}>
                                    <p key={index}>
                                        {item.name}
                                    </p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mobile-menu">
                    <i className="fa fa-bars" style={{fontStyle: 'normal'}}/>
            </div>
        </React.Fragment>
    )
}

export default Nav;