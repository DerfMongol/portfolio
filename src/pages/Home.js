import React, { useState } from 'react'

import html from '../images/HTML5_Logo_256.png'
import css from '../images/css3.png'
import js from '../images/js-small.gif'
import react from '../images/react.png'
import reactNat from '../images/reactNat.png'
import express from '../images/main-qimg-f406db5658b5d0dade4d70a989560439.png'

import ProjectBox from '../components/ProjectBox'

const Home = () => {
    const [skill, setSkill] = useState('Full Stack Web')
    const [article, setArticle] = useState('a')

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
                <img
                    className='image'
                    src={html}
                    alt='logo'
                    onMouseEnter={() => imageHover('HTML', 'a')}
                />
                <img
                    className='image'
                    src={css}
                    alt='logo'
                    onMouseEnter={() => imageHover('CSS', 'a')}
                />
                <img
                    className='image'
                    src={js}
                    alt='logo'
                    onMouseEnter={() => imageHover('JavaScript', 'a')}
                />

                <img
                    className='image'
                    src={react}
                    alt='logo'
                    onMouseEnter={() => imageHover('React', 'a')}
                />
                <img
                    className='image'
                    src={reactNat}
                    alt='logo'
                    onMouseEnter={() => imageHover('React Native', 'a')}
                />

                <img
                    className='express'
                    src={express}
                    alt='logo'
                    onMouseEnter={() => imageHover('Express', 'an')}
                />
            </div>
            <div className='projects'>
                <ProjectBox title='GoatRelic' />
                <ProjectBox title='MealsApp' />
                <ProjectBox title='TodoApp' />
                <ProjectBox title='WeatherApp' />
                <ProjectBox title='UniversalReactServer' />
            </div>
        </div>
    )
}

export default Home
