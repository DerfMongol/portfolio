import React, {useState, useEffect} from 'react'

const ProjectBox = props => {
    const [render, setRender] = useState(props.show)

    useEffect(() => {
        if (props.show) setRender(true)
    }, [props.show])

    const onAnimationEnd = () => {
        if (!props.show) setRender(false)
    }

    return (
        render && (
            <div
                className='project'
                style={{ animation: `${props.show ? 'fadeIn' : 'fadeOut'} 0.3s` }}
                onAnimationEnd={onAnimationEnd}
            >
                {props.title}
            </div>
        )
    )
}

export default ProjectBox
