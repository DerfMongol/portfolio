import React from 'react'

const Contact = props => {
    return (
        <div
            className={`image ${props.classClicked[props.index]}`}
            onMouseEnter={() => props.contactHover(props.title)}
            onClick={() =>
                props.contactClick(props.index, props.title)
            }
        >
            <a href={props.link}>
                <img src={props.pic} alt='logo' />
            </a>
        </div>
    )
}

export default Contact
