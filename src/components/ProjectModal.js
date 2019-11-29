import React, { useState, useEffect } from 'react'

import { PROJECTS } from '../data/data'
import ProjectInfo from './ProjectInfo'

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
                        <ProjectInfo
                            key={index}
                            index={index}
                            title={project1.title}
                            link={project1.link}
                            github={project1.github}
                            pic={project1.pic}
                            info={project1.info}
                        />
                    ))}
                </div>
            </div>
        )
    )
}

export default ProjectModal
