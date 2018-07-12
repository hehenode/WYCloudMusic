import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
    todos: '',
    current_music: {}
}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    getters,
    mutations,
    actions
})