import { SET_TODOS, UPADTE_CURRENT_MUSIC } from './mutation-types'
export default {
    [SET_TODOS](state, value) {
        state.todos = value
    },
    [UPADTE_CURRENT_MUSIC](state, value) {
        state.current_music = value
    }
}