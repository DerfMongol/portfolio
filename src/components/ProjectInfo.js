import React, { useState } from 'react'

const ProjectInfo = props => {
    const [picIndex, setPicIndex] = useState(0)

    function togglePic(index) {
        let copyIndex = picIndex + index
        if (copyIndex < 0) {
            copyIndex = props.pic.length - 1
        } else if (copyIndex === props.pic.length) {
            copyIndex = 0
        }
        setPicIndex(copyIndex)
    }

    return (
        <div key={props.index} className='projectInfo'>
            <div className='titleContainer'>
                <div className='titleModal'>{props.title}</div>
                {props.link ? (
                    <div>
                        Website: <a href={props.link}>{props.link}</a>
                    </div>
                ) : null}
                <div>
                    Github: <a href={props.github}>{props.github}</a>
                </div>
            </div>
            <div className='toggleProjectPics'>
                {props.pic.length > 1 ? (
                    <div
                        onClick={() => togglePic(-1)}
                        className='projectPicBtn'
                    >{`<`}</div>
                ) : null}

                <div
                    className='projectModal'
                    style={{
                        backgroundImage: `url(${props.pic[picIndex]})`
                    }}
                />
                {props.pic.length > 1 ? (
                    <div
                        onClick={() => togglePic(1)}
                        className='projectPicBtn'
                    >{`>`}</div>
                ) : null}
            </div>

            <div>{props.info}</div>
        </div>
    )
}

export default ProjectInfo
