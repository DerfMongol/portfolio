import React, { useState } from 'react'

import ProjectBox from '../components/ProjectBox'
import ImageContainer from '../components/ImageContainer'
import ProjectModal from '../components/ProjectModal'

import { PROJECTS, SKILLS } from '../data/data.js'

const Home = () => {
    const [skill, setSkill] = useState('Full Stack Web')
    const [article, setArticle] = useState('a')
    const [clicked, setClicked] = useState(['', '', '', '', '', ''])
    const [filterList, setFilterList] = useState([])
    const [show, setShow] = useState()
    const [overlayAnimation, setOverlayAnimation] = useState(false)
    const [projectId, setProjectId] = useState()
    const [projectShow, setProjectShow] = useState(false)
    const [filterKey, setFilterKey] = useState([
        false,
        false,
        false,
        false,
        false,
        false
    ])

    function imageClick(data, skill, article, e) {
        e.stopPropagation()
        const copy = [...filterKey]
        const copyClick = [...clicked]
        const copyFilter = []
        const copyShow = [false, false, false, false, false, false]

        copy[data] = !filterKey[data]
        setFilterKey(copy)

        if (clicked[data] === '') {
            copyClick[data] = 'clicked'
            setClicked(copyClick)
        } else {
            copyClick[data] = ''
            setClicked(copyClick)
        }

        PROJECTS.forEach((project, index1) => {
            copyFilter.push({
                id: project.id,
                title: project.title,
                pic: project.pic
            })
            project.list.some((data, index) => {
                if (!data && copy[index]) {
                    return true
                }
                if (index === 5) {
                    copyShow[index1] = true
                }
                return false
            })
        })
        setFilterList(copyFilter)
        setShow(copyShow)
        setSkill(skill)
        setArticle(article)
        setProjectShow(true)
    }

    function imageHover(skill, article) {
        setSkill(skill)
        setArticle(article)
    }

    return (
        <div className='container'>
            <ProjectModal
                show={overlayAnimation}
                setShow={setOverlayAnimation}
                projectId={projectId}
            />
            <div className='sentence'>Hello, My name is</div>
            <div className='skill'>Lee Martin</div>
            <div className='hover-skills'>
                <div className='sentence'>I am</div>
                <div className='article'>{article}</div>
                <div className='skill'>{skill}</div>
                <div className='sentence'>Developer.</div>
            </div>
            <div className="skillContainer">
                <div className='skills'>
                    {SKILLS.map(skill => (
                        <ImageContainer
                            key={skill.id}
                            clicked={clicked}
                            file={skill.file}
                            imageClick={imageClick}
                            imageHover={imageHover}
                            name={skill.name}
                            nouns={skill.noun}
                            index={skill.id}
                            firstClass={skill.cssClass}
                        />
                    ))}
                </div>
                {projectShow ? (
                    <div className='projects'>
                        {filterList.map((project, index) => (
                            <ProjectBox
                                key={index}
                                id={project.id}
                                setProjectId={setProjectId}
                                show={show[index]}
                                title={project.title}
                                pic={project.pic}
                                overlayAnimation={overlayAnimation}
                                setOverlayAnimation={setOverlayAnimation}
                            />
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Home
