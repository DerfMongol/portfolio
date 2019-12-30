import React, { useState } from 'react'

import ProjectPreview from './ProjectPreview'

const ProjectInfo = props => {
    const [picIndex, setPicIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(
        props.pic.length > 1 ? props.pic.length - 1 : null
    )
    const [nextIndex, setNextIndex] = useState(1)
    const [startAnimation, setStartAnimation] = useState(false)
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(false)

    function indexWithinRange(index) {
        if (index < 0) {
            index = props.pic.length - 1
        } else if (index >= props.pic.length) {
            index = 0
        }
        return index
    }

    function setIndexes(index) {
        let copyIndex = indexWithinRange(picIndex + index)
        let copyPrev = indexWithinRange(copyIndex - 1)
        let copyNext = indexWithinRange(copyIndex + 1)

        setPicIndex(copyIndex)
        setPrevIndex(copyPrev)
        setNextIndex(copyNext)
    }

    function clickPic(index) {
        if (window.innerWidth <= 760) {
            setIndexes(index)
        }
        setStartAnimation(true)
    }

    function toggleRight(e) {
        setShowLeft(true)
        setShowRight(false)
        clickPic(-1)
        e.stopPropagation()
    }

    function toggleLeft(e) {
        setShowRight(true)
        setShowLeft(false)
        clickPic(1)
        e.stopPropagation()
    }

    function onAnimationEnd() {
        let index
        if (showLeft) {
            setShowLeft(false)
            index = -1
        } else if (showRight) {
            setShowRight(false)
            index = 1
        } else {
            index = 0
        }
        setIndexes(index)
        setStartAnimation(false)
    }

    const rightClick = showRight ? 'clicked' : ''
    const leftClick = showLeft ? 'clicked' : ''

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
            <div className='arrowsContainer'>
                {props.pic.length > 1 ? (
                    <div
                        className={`projectPicBtn ${rightClick}`}
                        onClick={(e) => toggleLeft(e)}
                    >{`<`}</div>
                ) : null}
                {props.pic.length > 1 ? (
                    <div
                        className={`projectPicBtn ${leftClick}`}
                        onClick={(e) => toggleRight(e)}
                    >{`>`}</div>
                ) : null}
            </div>

            <div
                className={
                    props.pic.length > 1
                        ? 'toggleProjectPics'
                        : 'previewContainer'
                }
            >
                {showLeft ? (
                    <ProjectPreview
                        url={props.pic[indexWithinRange(prevIndex - 1)]}
                        className='projectPreviewShow left'
                        toggleMove={startAnimation ? 'leftAppear' : null}
                    />
                ) : null}
                <ProjectPreview
                    url={props.pic[prevIndex]}
                    className='projectPreview left'
                    toggleMove={
                        startAnimation
                            ? showLeft
                                ? 'moveRightGrow'
                                : 'leftDisappear'
                            : null
                    }
                    onAnimationEnd={onAnimationEnd}
                />
                <ProjectPreview
                    url={props.pic[picIndex]}
                    className='projectModal'
                    toggleMove={
                        startAnimation
                            ? showLeft
                                ? 'moveRightShrink'
                                : 'moveLeftShrink'
                            : null
                    }
                    onAnimationEnd={onAnimationEnd}
                />
                <ProjectPreview
                    url={props.pic[nextIndex]}
                    className='projectPreview right'
                    toggleMove={
                        startAnimation
                            ? showLeft
                                ? 'rightDisappear'
                                : 'moveLeftGrow'
                            : null
                    }
                    onAnimationEnd={onAnimationEnd}
                />
                {showRight ? (
                    <ProjectPreview
                        url={props.pic[indexWithinRange(nextIndex + 1)]}
                        className='projectPreviewShow right'
                        toggleMove={startAnimation ? 'rightAppear' : null}
                    />
                ) : null}
            </div>

            <div className='projectSummary'>{props.info}</div>
        </div>
    )
}

export default ProjectInfo
