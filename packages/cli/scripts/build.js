process.env.NODE_ENV = process.env.BABEL_ENV = 'production'

const gatherPipes = require('../loader')
const {webpack: transforms} = gatherPipes(['webpack'])

const patch = require('../patch')
const {paths} = require('@rescripts/utilities')
const {webpackConfigProd, build} = paths

patch(transforms, webpackConfigProd)

require(build)
