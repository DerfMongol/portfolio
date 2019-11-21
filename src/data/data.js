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
  new Project(0, 'GoatRelic', [true, true, true, true, true, true], goatRelic),
  new Project(1, 'MealsApp', [true, false, true, true, true, false], mealsApp),
  new Project(2, 'TheShopApp', [true, false, true, true, true, true], underConstruction),
  new Project(3, 'TodoApi', [false, false, true, false, false, true], todoApp),
  new Project(4, 'UniversalReactServer', [true, true, true, true, false, true], reactSsr)
];

export const SKILLS = [
  new Skill(0, html, 'HTML', 'a', 'image'),
  new Skill(1, css, 'CSS', 'a', 'image'),
  new Skill(2, js, 'JavaScript', 'a', 'image'),
  new Skill(3, react, 'React', 'a', 'image'),
  new Skill(4, reactNat, 'React Native', 'a', 'image'),
  new Skill(5, express, 'Express', 'an', 'express')
];