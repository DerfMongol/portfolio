import React from 'react'

const ProjectPreview = props => {
    return (
        <div
            className={props.className}
            style={{
                backgroundImage: `url(${props.url})`,
                animation: `${props.toggleMove} 0.5s`
            }}
            onAnimationEnd={props.onAnimationEnd}
        ></div>
    )
}

export default ProjectPreview
