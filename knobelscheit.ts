import { debug } from "node:console";
       
export class Knobelscheit  {
    public remainingNumbersList: number[] = [1,2,3,4,5,6,7,8,9];
    public alreadyFlippedNumbersList: number[] = [];
    public gameOverValue: boolean = false
    

   remainingNumbers () {
        return this.remainingNumbersList
    }   
    alreadyFlippedNumbers() { 
        return this.alreadyFlippedNumbersList
    }
    gameOver () {
        return this.gameOverValue
    }
    canFlip (num: number): boolean {
        if (!this.alreadyFlippedNumbers().includes(num)) {
            return true // is flippable
        } else {
            return false
        }
    }
    flip (nums: number[], sum: number): boolean {
        // debug(`Is Equal to value: ${(nums[0] + nums[1] == sum)}`);
        //  debug(`Is good length ${(nums.length == 2)}`);
        //  debug(`Is flippable ${this.canFlip(sum)}`);
        //  debug(`Is in range (0) ${(nums[0] > 0 && nums[0] < 7)}`);
        //  debug(`Is in range (1) ${(nums[1] > 0 && nums[1] < 7)}`);
        if (
            (nums[0] + nums[1] != sum)  ||
            (nums.length != 2)          || // rules out if no number is in the array
            !this.canFlip(sum)          ||
            (nums[0] < 0) ||
            ( nums[0] > 7)||
            (nums[1] < 0) ||
            ( nums[1] > 7)
            )
        {
            return false
            // return EvalError('First can only contain two number')
        } 
        
        this.alreadyFlippedNumbersList.push(sum);
        let repopulatedList: number[] = [] // repopulate with values in the for loop
        for (let i = 0; i < this.remainingNumbersList.length; i ++){
            if (this.remainingNumbersList[i] !== sum) {
                repopulatedList.push(this.remainingNumbersList[i])
            }
        }
        this.remainingNumbersList = repopulatedList
        return true

    }



}


