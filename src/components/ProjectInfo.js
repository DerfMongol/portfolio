import React, { useState } from 'react'

import ProjectPreview from './ProjectPreview'

const ProjectInfo = props => {
    const [picIndex, setPicIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(props.pic.length - 1)
    const [nextIndex, setNextIndex] = useState(1)
    const [toggleMove, setToggleMove] = useState()

    function indexWithinRange(index) {
        if (index < 0) {
            index = props.pic.length - 1
        } else if (index >= props.pic.length) {
            index = 0
        }
        return index
    }

    function togglePic(index) {
        if (index === -1) {
            setToggleMove('moveRight')
        } else if (index === 1) {
            setToggleMove('moveLeft')
        }

        
    }

    function onAnimationEnd() {
        let index
        if (toggleMove === 'moveRight') {
            index = -1
        } else if (toggleMove === 'moveLeft') {
            index = 1
        }
        else {
            index = 0
        }
        let copyIndex = indexWithinRange(picIndex + index)
        let copyPrev = indexWithinRange(copyIndex - 1)
        let copyNext = indexWithinRange(copyIndex + 1)

        setPicIndex(copyIndex)
        setPrevIndex(copyPrev)
        setNextIndex(copyNext)
        setToggleMove('')
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
                        onClick={() => togglePic(1)}
                        className='projectPicBtn'
                    >{`<`}</div>
                ) : null}
                <div className='previewContainer'>
                    <ProjectPreview
                        url={props.pic[prevIndex]}
                        className='projectPreview'
                        toggleMove={toggleMove}
                        setToggleMove={setToggleMove}
                        onAnimationEnd={onAnimationEnd}
                        
                    />
                    <ProjectPreview
                        url={props.pic[picIndex]}
                        className='projectModal'
                        toggleMove={toggleMove}
                        setToggleMove={setToggleMove}
                        onAnimationEnd={onAnimationEnd}
                    />
                    <ProjectPreview
                        url={props.pic[nextIndex]}
                        className='projectPreview'
                        toggleMove={toggleMove}
                        setToggleMove={setToggleMove}
                        onAnimationEnd={onAnimationEnd}
                    />
                </div>

                {props.pic.length > 1 ? (
                    <div
                        onClick={() => togglePic(-1)}
                        className='projectPicBtn'
                    >{`>`}</div>
                ) : null}
            </div>

            <div>{props.info}</div>
        </div>
    )
}

export default ProjectInfo
