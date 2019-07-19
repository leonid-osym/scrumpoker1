const INITIAL_STATE = {
    title: '',
    gameMode: 'standard',
    cardRevealMode: false,
    drawerIndicator: true
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_GAME_MODE': {
            return {
                ...state,
                gameMode: action.payload
            }
        }
        case 'SET_CARD_REVEAL_MODE': {
            return {
                ...state,
                cardRevealMode: action.payload
            }
        }
        case 'ALLOW_DRAWER_INDICATOR': {
            return {
                ...state,
                drawerIndicator: action.payload
            }
        }
        default: return state;
    }
}