import React from 'react'

const Contact = props => {
    return (
        <div className='image' onMouseEnter={() => props.contactHover(props.title)}>
            <a href={props.link}>
                <img src={props.pic} alt='logo' />
            </a>
        </div>
    )
}

export default Contact
