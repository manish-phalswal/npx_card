'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Manish Kumar'),
  handle: chalk.white('manish_kumar'),
  work: chalk.white('Software Developer at AIIMS, New Delhi'),
  mail: chalk.white("manishphalswal1995@gmail.com") + chalk.green('⬢'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~manish_kumar'),
  github: chalk.gray('https://github.com/') + chalk.green('manish-phalswal'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('manish001'),
  resume: chalk.cyan('https://drive.google.com/file/d/1MwEN2cKWoLg_AkOzA7G2Pd0dBISkxhiK/view?usp=sharing'),
  npx: chalk.red('npx') + ' ' + chalk.white('manish_kumar'),
  labelWork: chalk.white.bold('       Work:'),
  labelmail: chalk.white.bold('       Mail:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelResume: chalk.white.bold('     Resume:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const mailing = `${data.labelmail}  ${data.mail}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const npming = `${data.labelnpm}  ${data.npm}`
const resuming = `${data.labelResume}  ${data.resume}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
  newline + newline + // Add one whole blank line
  working + newline + // data.labelWork + data.work
  mailing + newline + newline + // data.labelmail + data.mail
  githubing + newline + // data.labelGitHub + data.github
  linkedining + newline + // data.labelLinkedIn + data.linkedin
  npming + newline + // data.labelnpm + data.npm
  resuming + newline + newline + // data.labelResume + data.resume
  carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
