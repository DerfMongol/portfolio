import React, { useState } from 'react'

import ProjectPreview from './ProjectPreview'

const ProjectInfo = props => {
    const [picIndex, setPicIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(props.pic.length > 1 ? props.pic.length - 1 : null)
    const [nextIndex, setNextIndex] = useState(1)
    const [toggleMove, setToggleMove] = useState()
    const [startAnimation, setStartAnimation] = useState(false)
    const [appear, setAppear] = useState()

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
        setStartAnimation(true)
    }

    function onAnimationEnd() {
        let index
        if (toggleMove === 'moveRight') {
            index = -1
            setAppear('right')
        } else if (toggleMove === 'moveLeft') {
            index = 1
            setAppear('left')
        } else {
            index = 0
        }
        let copyIndex = indexWithinRange(picIndex + index)
        let copyPrev = indexWithinRange(copyIndex - 1)
        let copyNext = indexWithinRange(copyIndex + 1)

        setPicIndex(copyIndex)
        setPrevIndex(copyPrev)
        setNextIndex(copyNext)
        setToggleMove('')
        setStartAnimation(false)
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
                        toggleMove={
                            startAnimation
                                ? toggleMove === 'moveRight'
                                    ? 'moveRightGrow'
                                    : 'disappear'
                                : appear === 'right'
                                    ? 'appear'
                                    : null
                        }
                        onAnimationEnd={onAnimationEnd}
                    />
                    <ProjectPreview
                        url={props.pic[picIndex]}
                        className='projectModal'
                        toggleMove={
                            startAnimation
                                ? toggleMove === 'moveRight'
                                    ? 'moveRightShrink'
                                    : 'moveLeftShrink'
                                : null
                        }
                        onAnimationEnd={onAnimationEnd}
                    />
                    <ProjectPreview
                        url={props.pic[nextIndex]}
                        className='projectPreview'
                        toggleMove={
                            startAnimation
                                ? toggleMove === 'moveRight'
                                    ? 'disappear'
                                    : 'moveLeftGrow'
                                : appear === 'left'
                                    ? 'appear'
                                    : null
                        }
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

            <div className='projectSummary'>{props.info}</div>
        </div>
    )
}

export default ProjectInfo
