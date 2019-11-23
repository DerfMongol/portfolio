import React, { useState, useEffect } from 'react'

const ProjectBox = props => {
    const [render, setRender] = useState(props.show)
    const [showTitle, setShowTitle] = useState('')
    const [overlay, setOverlay] = useState('')
    const [overlayAnimation, setOverlayAnimation] = useState(false)

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

    function overlayClick() {
        setOverlayAnimation(!overlayAnimation)
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
                <div
                    onClick={overlayClick}
                    className={overlay}
                    style={{
                        animation: `${overlayAnimation ? 'expandFull' : 'bringBack'} 1s`,
                        background: overlayAnimation ? 'lime' : 'rgba(71, 70, 70, 0.842)',
                        transform: overlayAnimation ? 'scale(1.9)' : 'scale(1)'
                    }}
                    
                >
                    {showTitle}
                </div>
            </div>
        )
    )
}

export default ProjectBox
