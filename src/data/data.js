import Project from '../models/project'

import goatRelic from '../images/goatrelic.png'
import mealsApp from '../images/mealsapp2.png'
import reactSsr from '../images/reactssr.png'

export const PROJECTS = [
  new Project(0, 'GoatRelic', [true, true, true, true, true, true], goatRelic),
  new Project(1, 'MealsApp', [true, false, true, true, true, false], mealsApp),
  new Project(2, 'TheShopApp', [true, false, true, true, true, true], null),
  new Project(3, 'TodoApi', [false, false, true, false, false, true], null),
  new Project(4, 'UniversalReactServer', [true, true, true, true, false, true], reactSsr)
];