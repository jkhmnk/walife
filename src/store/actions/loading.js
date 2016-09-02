import {LOADING_ADD, LOADING_MIN} from '../mutation-types'

export const add = ({dispatch}) => {
  dispatch(LOADING_ADD)
}

export const min = ({dispatch}) => {
  dispatch(LOADING_MIN)
}
