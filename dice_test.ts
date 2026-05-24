import { assertAlmostEquals, assertEquals } from "@std/assert";
import { formattedAddition } from "./demo.ts";
import { rollDice, rollTwoDice } from './dice.ts'



Deno.test(' Zahl zwischen 1-6 würfeln', () => {
    const random1 = rollDice()
    const random2 = rollDice()
    assertAlmostEquals(random1, 3, 2)
    assertAlmostEquals(random2, 3, 2)
});

Deno.test('2x Würfeln und Summe richtig auswerten', () => {
    const result = rollTwoDice() // returns js object
    assertEquals(result.sum, (result.one + result.two))
})