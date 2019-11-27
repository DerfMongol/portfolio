import React, { useState, useEffect } from 'react'

import { PROJECTS } from '../data/data'

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
                    {PROJECTS.filter(
                        project => project.id === props.projectId
                    ).map((project1, index) => (
                        <div key={index}>
                            <div className='titleModal'>{project1.title}</div>
                            <div className='projectModal' style={{ backgroundImage: `url(${project1.pic})` }} />
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}

export default ProjectModal
