export default (state = false, action) => {
    switch (action.type) {
        case 'COMPLETE':
            return true
        default:
            return state
    }
}
