require('shelljs/global')
env.NODE_ENV = 'production'
env.SERVER = 'test'

require('./build')
