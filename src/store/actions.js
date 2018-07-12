export default {
    async_set_todos({ commit }, value) {
        setTimeout(() => {
            commit('SET_TODOS', value)
        }, 2000)
    }
}