import { Knobelscheit  } from "./knobelscheit.ts";
import { rollTwoDice } from "./dice.ts";

function tryInt(value:string): number[] {
    try {
        if (value === '') {return []}
        const values = value.split(',')
        let numList: number[] = [];
        for (let i = 0; i < values.length; i++) {
            Number.parseInt(values[i])
            numList.push(Number.parseInt(values[i]))
        }
        return numList
    } catch {
        return [] // return 0 since 0 is not in the valid range
    }
}
function main() {
    console.log('Welcome to the Knobelscheit game!');

    const game = new Knobelscheit();

    while (!game.gameOver()) {
        console.log(`Remaining numbers: ${game.remainingNumbers().join(',')}`)
        // roll the dices
        const result = rollTwoDice()
        console.log(`Rolled: ${result.one} + ${result.two} = ${result.sum}`);
        game.flip([result.one, result.two], result.sum)
        let userInput: string = ''
        while (!game.flip(tryInt(userInput), result.sum)) {
            console.log('Invalid Input! please choose one or more numbers that are equal to the sum')
            userInput = prompt('Your Choice(s f.e. `3,1` for 4`') || ''

        }
        let userInputArray = userInput.split(',')
        // is flippable
        game.flip([])

        
        
    }
    
    game.flip([3,6], 9)
}
main()