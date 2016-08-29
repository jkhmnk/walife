require('shelljs/global')
env.NODE_ENV = 'production'
env.SERVER = 'prod'

require('./build')
