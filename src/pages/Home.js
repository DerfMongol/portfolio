import React, { useState, useEffect } from 'react'

import html from '../images/HTML5_Logo_256.png'
import css from '../images/css3.png'
import js from '../images/js-small.gif'
import react from '../images/react.png'
import reactNat from '../images/reactNat.png'
import express from '../images/main-qimg-f406db5658b5d0dade4d70a989560439.png'

import ProjectBox from '../components/ProjectBox'
import ImageContainer from '../components/ImageContainer'
import { PROJECTS } from '../data/data.js'

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
        const copyShow = [
            false,
            false,
            false,
            false,
            false,
            false
        ]

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
            copyFilter.push({title: project.title, pic: project.pic})
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
                <ImageContainer
                    clicked={clicked}
                    file={html}
                    imageClick={imageClick}
                    imageHover={imageHover}
                    name={'HTML'}
                    nouns={'a'}
                    index={0}
                    firstClass={'image'}
                />
                <ImageContainer
                    clicked={clicked}
                    file={css}
                    imageClick={imageClick}
                    imageHover={imageHover}
                    name={'CSS'}
                    nouns={'a'}
                    index={1}
                    firstClass={'image'}
                />
                <ImageContainer
                    clicked={clicked}
                    file={js}
                    imageClick={imageClick}
                    imageHover={imageHover}
                    name={'JavaScript'}
                    nouns={'a'}
                    index={2}
                    firstClass={'image'}
                />
                <ImageContainer
                    clicked={clicked}
                    file={react}
                    imageClick={imageClick}
                    imageHover={imageHover}
                    name={'React'}
                    nouns={'a'}
                    index={3}
                    firstClass={'image'}
                />
                <ImageContainer
                    clicked={clicked}
                    file={reactNat}
                    imageClick={imageClick}
                    imageHover={imageHover}
                    name={'React Native'}
                    nouns={'a'}
                    index={4}
                    firstClass={'image'}
                />
                <ImageContainer
                    clicked={clicked}
                    file={express}
                    imageClick={imageClick}
                    imageHover={imageHover}
                    name={'Express'}
                    nouns={'an'}
                    index={5}
                    firstClass={'express'}
                />
            </div>
            <div className='projects'>
                {filterList.map((project, index) => (
                    <ProjectBox show={show[index]} key={index} title={project.title} pic={project.pic} />
                ))}
            </div>
        </div>
    )
}

export default Home
