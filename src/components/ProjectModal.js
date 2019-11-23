import React, { useState, useEffect } from 'react'
import ProjectBox from './ProjectBox'

const ProjectModal = props => {
    const [render, setRender] = useState(props.show)

    useEffect(() => {
        if (props.show) setRender(true)
    }, [props.show])

    function clickHandler() {
        props.setShow(!props.show)
    }

    function onAnimationEnd() {
        if (!props.show) setRender(false)
    }

    function childClickHandler(e) {
        e.stopPropagation()
    }

    return (
        render && (
            <div
                className='backdrop'
                onClick={clickHandler}
                style={{
                    animation: `${props.show ? 'slowEnter' : 'slowLeave'} 0.5s`
                }}
                onAnimationEnd={onAnimationEnd}
            >
                <div
                    className='modal'
                    onClick={childClickHandler}
                    style={{
                        animation: `${
                            props.show ? 'slowEnter' : 'slowLeave'
                        } 0.5s`
                    }}
                    onAnimationEnd={onAnimationEnd}
                >
                    Hello
                </div>
            </div>
        )
    )
}

export default ProjectModal
