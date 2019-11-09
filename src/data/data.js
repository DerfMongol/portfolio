import Project from '../models/project'

export const PROJECTS = [
  new Project('p1', 'GoatRelic', [true, true, true, true, true, true]),
  new Project('p2', 'MealsApp', [true, false, true, true, true, false]),
  new Project('p3', 'TheShopApp', [true, false, true, true, true, true]),
  new Project('p4', 'TodoApi', [false, false, true, false, false, true]),
  new Project('p5', 'UniversalReactServer', [true, true, true, true, false, true])
];