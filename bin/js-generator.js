#!/usr/bin/env node

const program = require('commander')
const create = require('../lib/create')
program
  .version(require('../package.json').version)
  .usage('js-generator <command> [options]')

// create project
program
  .command('create <project-name>')
  .description('create project')
  .alias('i')
  .action(() => {
    // console.log('create')
    create()
  })

// list all templates
program
  .command('list')
  .description('list all avaiable templates')
  .alias('l')
  .action(() => {
    require('../lib/list.js')
  })