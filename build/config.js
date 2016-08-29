// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
const devEnv = require('./env/dev.env')
const prodEnv = require('./env/prod.env')
const projectName = 'vuedemo'
const distPath = path.resolve(__dirname, '../dist/' + projectName)

module.exports = {
    projectName,
    build: {
        env: prodEnv,
        index: path.resolve(distPath, './index.html'),
        assetsRoot: distPath,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/' + projectName + '/',
        productionSourceMap: true
    },
    dev: {
        env: devEnv,
        port: 5050,
    }
}
