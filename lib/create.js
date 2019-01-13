const inquirer = require('inquirer')
const { stopSpinner, error } = require('../utils')
const templates = require('../templates.json')

function create(projectName, options) {
  console.log(projectName, options)
  // list all templates
  inquirer
    .prompt([
      {
        name: 'template-choice',
        description: 'What template do you want to use?',
        type: 'list',
        choices: Object.keys(templates)
      }
    ])
    .then((answers) => {
      // filter selected template and clone from github
      // const template = Object.keys(templates).filter(tpl => tpl === answers['template-choice'])
      
    })
}
module.exports = (...args) => {
  console.log('hi')
  create(...args).catch((err) => {
    error(err)
    stopSpinner(false)
  })
}
