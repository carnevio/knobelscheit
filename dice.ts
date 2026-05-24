export function rollDice() {
    return Math.floor(Math.random()*6)
}

export function rollTwoDice() {
    const num1 = rollDice()
    const num2 = rollDice()
    const sum = num1 + num2
    return {
        one: num1,
        two: num2,
        sum:sum
    }
}
