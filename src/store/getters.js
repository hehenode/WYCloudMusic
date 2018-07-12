export default {
    get_idx_todos: (state) => (idx) => {
        return state.todos.split('/')[idx]
    }
}