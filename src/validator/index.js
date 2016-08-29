import Vue from 'vue'
import VueValidator from 'vue-validator'
import {email} from './common'

Vue.use(VueValidator)

Vue.validator('email', email)
