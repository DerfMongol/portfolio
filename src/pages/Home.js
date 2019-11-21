import React, { useState, useEffect } from 'react'

import ProjectBox from '../components/ProjectBox'
import ImageContainer from '../components/ImageContainer'
import { PROJECTS, SKILLS } from '../data/data.js'

const Home = () => {
    const [skill, setSkill] = useState('Full Stack Web')
    const [article, setArticle] = useState('a')
    const [clicked, setClicked] = useState(['', '', '', '', '', ''])
    const [filterList, setFilterList] = useState([])
    const [show, setShow] = useState()
    const [filterKey, setFilterKey] = useState([
        false,
        false,
        false,
        false,
        false,
        false
    ])

    function imageClick(data) {
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
            copyFilter.push({ title: project.title, pic: project.pic })
            project.list.some((data, index) => {
                if (!data && copy[index]) {
                    return true
                }
                if (index === 5) {
                    copyShow[index1] = true
                }
            })
        })
        setFilterList(copyFilter)
        setShow(copyShow)
    }

    // useEffect(() => {})

    function imageReset() {
        const reset = ['', '', '', '', '', '']
        setClicked(reset)
    }

    function imageHover(skill, article) {
        setSkill(skill)
        setArticle(article)
    }

    return (
        <div className='container'>
            <div className='sentence'>Hello, My name is Lee Martin.</div>
            <div className='hover-skills'>
                <div className='sentence'>I am</div>
                <div className='article'>{article}</div>
                <div className='skill'>{skill}</div>
                <div className='sentence'>Developer.</div>
            </div>

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
            <div className='projects'>
                {filterList.map((project, index) => (
                    <ProjectBox
                        show={show[index]}
                        key={index}
                        title={project.title}
                        pic={project.pic}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
