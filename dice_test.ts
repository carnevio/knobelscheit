import { assertAlmostEquals, assertEquals, assert } from "@std/assert";
import { formattedAddition } from "./demo.ts";
import { rollDice, rollTwoDice } from './dice.ts'



Deno.test(' Zahl zwischen 1-6 würfeln', () => {
    const random1 = rollDice()
    const random2 = rollDice()
    assert((random1 > 0 && random1 < 7))
    assert((random2 > 0 && random2 < 7))
});

Deno.test('2x Würfeln und Summe richtig auswerten', () => {
    const result = rollTwoDice() // returns js object
    assertEquals(result.sum, (result.one + result.two))
})