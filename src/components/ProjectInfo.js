import React from 'react'

const ProjectInfo = props => {
    return (
        <div key={props.index}>
            <div className='titleModal'>{props.title}</div>
            {props.link ? (
                <div>
                    Website: <a href={props.link}>{props.link}</a>
                </div>
            ) : null}
            <div>
                Github: <a href={props.github}>{props.github}</a>
            </div>
            <div
                className='projectModal'
                style={{
                    backgroundImage: `url(${props.pic})`
                }}
            />
        </div>
    )
}

export default ProjectInfo
