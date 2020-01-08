import React, { useState } from 'react'

import ProjectBox from '../components/ProjectBox'
import ImageContainer from '../components/ImageContainer'
import ProjectModal from '../components/ProjectModal'
import Contact from '../components/Contact'

import { PROJECTS, SKILLS, CONTACTS } from '../data/data.js'

const Home = () => {
    const [skill, setSkill] = useState('Full Stack Web')
    const [article, setArticle] = useState('a')
    const [clicked, setClicked] = useState(['', '', '', '', '', ''])
    const [filterList, setFilterList] = useState(() => renderProjects())
    const [show, setShow] = useState([true, true, true, true, true, true])
    const [overlayAnimation, setOverlayAnimation] = useState(false)
    const [projectId, setProjectId] = useState()
    const [projectShow, setProjectShow] = useState(true)
    const [clickOne, setClickOne] = useState(true)
    const [afterClickOne, setAfterClickOne] = useState(true)
    const [contactTitle, setContactTitle] = useState('')
    const [classClicked, setClassClicked] = useState(['','',''])
    const [filterKey, setFilterKey] = useState([
        false,
        false,
        false,
        false,
        false,
        false
    ])

    function renderProjects() {
        const copyFilter = []
        PROJECTS.forEach((project, index1) => {
            copyFilter.push({
                id: project.id,
                title: project.title,
                pic: project.pic
            })
        })
        return copyFilter
    }

    function imageClick(data, skill, article, e) {
        const copy = [...filterKey]
        const copyClick = [...clicked]
        const copyFilter = []
        const copyShow = show

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
                    copyShow[index1] = false
                    return true
                }
                if (index === 5) {
                    copyShow[index1] = true
                }
                return false
            })
            console.log(project)
        })

        console.log(filterList)
        setFilterList(copyFilter)
        setShow(copyShow)
        setSkill(skill)
        setArticle(article)
        setProjectShow(true)
        setClickOne(false)
    }

    function imageHover(skill, article) {
        setSkill(skill)
        setArticle(article)
    }

    function imageContact(title) {
        const eraseContact = ['','','']
        setClassClicked(eraseContact)
        setContactTitle(title)
    }

    function contactClick(index, title) {
        const copyContact = ['','','']
        if (classClicked[index] === '') {
            copyContact[index] = 'clicked'
            
        } else {
            copyContact[index] = ''
        }
        setClassClicked(copyContact)
        setContactTitle(title)


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

            <div className='skillContainer'>
                <div className='skills'>
                    <div
                        className='clickOne'
                        style={{
                            animation: `${clickOne ? '' : 'exitClickOne'} 0.7s`,
                            width: `${afterClickOne ? '100px' : '0'}`
                        }}
                        onAnimationEnd={() => setAfterClickOne(false)}
                    >
                        {afterClickOne ? 'Press to Filter: ' : ''}
                    </div>
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
                            isMobile={window.innerWidth <= 760 ? true : false}
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
            <div className='contactInfo'>
                <div className='contactTitle'>Contact</div>
                <div className='contactLink'>{contactTitle}</div>
            </div>

            <div className='contactContainer'>
                {CONTACTS.map(contact => (
                    <Contact
                        key={contact.id}
                        clicked={clicked}
                        contactHover={imageContact}
                        contactClick={contactClick}
                        classClicked={classClicked}
                        link={contact.link}
                        pic={contact.pic}
                        title={contact.title}
                        index={contact.id}
                        isMobile={window.innerWidth <= 760 ? true : false}
                    />
                ))}
            </div>
            <div className='copyright'>© 2020 Lee Martin.</div>
        </div>
    )
}

export default Home
