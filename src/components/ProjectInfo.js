import React, { useState } from 'react'

import ProjectPreview from './ProjectPreview'

const ProjectInfo = props => {
    const [picIndex, setPicIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(
        props.pic.length > 1 ? props.pic.length - 1 : null
    )
    const [nextIndex, setNextIndex] = useState(1)
    const [toggleMove, setToggleMove] = useState()
    const [startAnimation, setStartAnimation] = useState(false)
    const [appear, setAppear] = useState()
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

    function togglePic(index) {
        if (index === -1) {
            setToggleMove('moveRight')
            setShowLeft(true)
            setShowRight(false)
        } else if (index === 1) {
            setToggleMove('moveLeft')
            setShowRight(true)
            setShowLeft(false)
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

        setShowLeft(false)
        setShowRight(false)
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
            <div
                className={
                    props.pic.length > 1
                        ? 'toggleProjectPics'
                        : 'previewContainer'
                }
            >
                {props.pic.length > 1 ? (
                    <div
                        onClick={() => togglePic(1)}
                        className='projectPicBtn'
                    >{`<`}</div>
                ) : null}

                {showLeft ? (
                    <ProjectPreview
                        url={props.pic[indexWithinRange(prevIndex - 1)]}
                        className='projectPreviewShow left'
                        toggleMove={startAnimation ? 'appear' : null}
                    />
                ) : null}
                <ProjectPreview
                    url={props.pic[prevIndex]}
                    className='projectPreview left'
                    toggleMove={
                        startAnimation
                            ? toggleMove === 'moveRight'
                                ? 'moveRightGrow'
                                : 'disappear'
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
                    className='projectPreview right'
                    toggleMove={
                        startAnimation
                            ? toggleMove === 'moveRight'
                                ? 'disappear'
                                : 'moveLeftGrow'
                            : null
                    }
                    onAnimationEnd={onAnimationEnd}
                />
                {showRight ? (
                    <ProjectPreview
                        url={props.pic[indexWithinRange(nextIndex + 1)]}
                        className='projectPreviewShow right'
                        toggleMove={startAnimation ? 'appear' : null}
                    />
                ) : null}

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
