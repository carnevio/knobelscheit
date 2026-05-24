import { Knobelscheit  } from "./knobelscheit.ts";
import { rollTwoDice } from "./dice.ts";
import { debug } from "node:console";

function parseSelection(input: string) {
    const trimmed = input.trim() // assumes value is already not null and fixes any values left and right extra
    if (trimmed.length === 0) {return null}
    const parts = trimmed.split(',')
    const numbers: number [] = []
    for (const part of parts) {
        if (['0','1','2','3','4','5','6','7', '8', '9'].includes(part)) { 
            numbers.push(Number.parseInt(part))
        }
    }
    return numbers
}
/*
function parseSelection(value:string): number[] | null {
    try {
        if (value === '') {return null}
        const values = value.split(',')
        let numList: number[] = [];
        for (let i = 0; i < values.length; i++) {
            Number.parseInt(values[i])
            numList.push(Number.parseInt(values[i]))
        }
        return numList
    } catch {
        return null // return 0 since 0 is not in the valid range
    }
}
*/
function main() {
    console.log('Welcome to the Knobelscheit game!');

    const game = new Knobelscheit();
    while (!game.gameOver()) {
        console.log(`Remaining numbers: ${game.remainingNumbers().join(',')}`)
        // roll the dices
        const {one, two, sum} = rollTwoDice()

        console.log(`Rolled: ${one} + ${two} = ${sum}`);
        debug(game.flip([one, two], sum))
        while (true) {
            const input = prompt('Which Numbers do you want to flip:')
            if (input === null || input === '') {
                return // redo action
            }
            debug(parseSelection(input))
            const parsedSelection = parseSelection(input)
            if (parsedSelection === null) {
                return; // redo action
            }
            const flip = game.flip(parsedSelection, sum)
            debug(flip)
            debug(sum)
            if (flip) {
                break;
            }
             
            
        }
        

        
        
    }
    
    game.flip([3,6], 9)
}
main()