import Project from '../models/project'
import Skill from '../models/skill'
import Contact from '../models/contact'

import {
    logos,
    goatRelic,
    mealsApp,
    shopApp,
    todoApp,
    reactSsr,
    contactLogos
} from './imageData'

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
        shopApp,
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
    new Skill(0, logos.html, 'HTML', 'a', 'image'),
    new Skill(1, logos.css, 'CSS', 'a', 'image'),
    new Skill(2, logos.js, 'JavaScript', 'a', 'image'),
    new Skill(3, logos.react, 'React', 'a', 'image'),
    new Skill(4, logos.reactNat, 'React Native', 'a', 'image'),
    new Skill(5, logos.express, 'Express', 'an', 'image')
]

export const CONTACTS = [
    new Contact(0, 'GitHub', 'https://github.com/DerfMongol', contactLogos.github),
    new Contact(1, 'StackOverflow', 'https://stackoverflow.com/users/8145633/derf-mongrel', contactLogos.stackoverflow),
    new Contact(2, 'Email', 'mailto:leefredmart@gmail.com', contactLogos.email)
]
