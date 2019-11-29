import Project from '../models/project'
import Skill from '../models/skill'

import goatRelic from '../images/goatrelic.png'
import mealsApp from '../images/mealsapp2.png'
import reactSsr from '../images/reactssr.png'
import todoApp from '../images/todoApp.png'
import underConstruction from '../images/construction.png'

import html from '../images/HTML5_Logo_256.png'
import css from '../images/css3.png'
import js from '../images/js-small.gif'
import react from '../images/react.png'
import reactNat from '../images/reactNat.png'
import express from '../images/main-qimg-f406db5658b5d0dade4d70a989560439.png'

export const PROJECTS = [
    new Project(
        0,
        'GoatRelic',
        [true, true, true, true, true, true],
        'https://www.goatrelic.com',
        'https://www.github.com/DerfMongol/goatrelic-react',
        goatRelic,
        `The Rottentomatoes of the sports world. A universal react 
        app with an express / mongodb backend that aggregates the 
        greatest sports players of all time into one master list. 
        Users can also sign in using Google OAuth to make their own lists.`
    ),
    new Project(
        1,
        'MealsApp',
        [true, false, true, true, true, false],
        null,
        'https://www.github.com/DerfMongol/meals-app-react-native',
        mealsApp,
        `A React Native App that allows users to favorite meals and 
        filter meals according to their diet.`
    ),
    new Project(
        2,
        'TheShopApp',
        [true, false, true, true, true, true],
        null,
        'https://www.github.com/DerfMongol/shop-app-react-native',
        underConstruction,
        `A Full Stack React Native App I'm currently developing.`
    ),
    new Project(
        3,
        'TodoApi',
        [false, false, true, false, false, true],
        null,
        'https://www.github.com/DerfMongol/node-todo-api',
        todoApp,
        `A pure Node.js backend api with no GUI. Includes 
        the logic for a user to login, become authenticated 
        and to repeat the process when they return.`
    ),
    new Project(
        4,
        'UniversalReactServer',
        [true, true, true, true, false, true],
        null,
        'https://www.github.com/DerfMongol/universal-react-server',
        reactSsr,
        `A Server Side Rendered React App that allows users to sign in 
        and then show a list of the users currently signed in.`
    )
]

export const SKILLS = [
    new Skill(0, html, 'HTML', 'a', 'image'),
    new Skill(1, css, 'CSS', 'a', 'image'),
    new Skill(2, js, 'JavaScript', 'a', 'image'),
    new Skill(3, react, 'React', 'a', 'image'),
    new Skill(4, reactNat, 'React Native', 'a', 'image'),
    new Skill(5, express, 'Express', 'an', 'express')
]
