require('shelljs/global')
env.NODE_ENV = 'production'
env.SERVER = 'dev'

require('./build')
