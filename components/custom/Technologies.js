import React from 'react';

const Tech = () => {
    const Items = [
        {
            name: 'Python',
            icon: '/python.png',
        },
        {
            name: 'PHP',
            icon: '/php.png',
        },
        {
            name: 'React',
            icon: '/react.png',
        },
        {
            name: 'Node',
            icon: '/node.png',
        },
        {
            name: 'HTML 5',
            icon: '/html5.png',
        },
        {
            name: 'CSS3',
            icon: '/css3.png',
        },
        {
            name: '.NET',
            icon: '/net.png',
        },
        {
            name: 'React Native',
            icon: '/reactNative.png',
        },
        {
            name: 'AWS',
            icon: '/aws.png',
        },
        {
            name: 'Docker',
            icon: '/docker.png',
        },
        {
            name: 'MySQL',
            icon: '/mysql.png',
        },
        {
            name: 'PostgreSQL',
            icon: '/postgresSql.png',
        },
        {
            name: 'MSSQL',
            icon: '/mssql.png',
        },
        {
            name: 'Redis',
            icon: '/redis.png',
        },
        {
            name: 'MongoDB',
            icon: '/mongodb.png',
        },
        {
            name: 'DynamoDB',
            icon: '/dynamodb.png',
        },
    ]
    return (
        <React.Fragment>
            <div className="tech-component" id="technologies">
                <h1>Technologies</h1>
                <div className="tech-box">
                {Items.map((item, index) => {
                    return (
                        <div className="single-tech-box">
                            <img src={`/img/icons${item.icon}`} alt={item.name} className="icon-box"/>
                            <p className="tech-text">{item.name}</p>
                        </div>
                    )
                })}
            </div>
            </div>
        </React.Fragment>
    )
}

export default Tech;