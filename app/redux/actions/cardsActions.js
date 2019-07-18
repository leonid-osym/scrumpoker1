export const setGameMode = (gameMode) => {
    return {
        type: 'SET_GAME_MODE',
        payload: gameMode
    }
}

export const setCardRevealMode = (cardRevealMode) => {
    return {
        type: 'SET_CARD_REVEAL_MODE',
        payload: cardRevealMode
    }
}