import React, { useState, useEffect } from 'react'

const ProjectBox = props => {
    const [render, setRender] = useState(props.show)
    const [showTitle, setShowTitle] = useState('')
    const [overlay, setOverlay] = useState('')

    useEffect(() => {
        if (props.show) setRender(true)
    }, [props.show])

    function onAnimationEnd() {
        if (!props.show) setRender(false)
    }

    function projectHover(name, overlay) {
        setShowTitle(name)
        setOverlay(overlay)
    }

    return (
        render && (
            <div
                className='project'
                style={{
                    animation: `${props.show ? 'fadeIn' : 'fadeOut'} 1s`,
                    backgroundImage: `url(${props.pic})`
                }}
                onAnimationEnd={onAnimationEnd}
                onMouseEnter={() => projectHover(props.title, 'overlay')}
                onMouseLeave={() => projectHover('', '')}
            >
                <div className={overlay}>{showTitle}</div>
            </div>
        )
    )
}

export default ProjectBox
