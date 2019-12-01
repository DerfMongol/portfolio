import React, { useState } from 'react'

const ProjectPreview = props => {

    function onAnimationEnd() {
        props.setToggleMove('')
    }

    return (
        <div
            className={props.className}
            style={{
                backgroundImage: `url(${props.url})`,
                animation: `${props.toggleMove} 0.5s`
            }}
            onAnimationEnd={onAnimationEnd}
           
        />
    )
}

export default ProjectPreview
