import React from 'react'

const ImageContainer = props => {
    return (
        <div
            className={`${props.firstClass} ${props.clicked[props.index]}`}
            onClick={() => props.imageClick(props.index, props.name, props.nouns)}
            onMouseEnter={() => props.imageHover(props.name, props.nouns)}
        >
            <img src={props.file} alt='logo' />
        </div>
    )
}

export default ImageContainer
