import { assertEquals } from "@std/assert";
import { formattedAddition } from "./demo.ts";
import { rollDice, rollTwoDice } from './roll.ts'



Deno.test(' Zahl zwischen 1-6 würfeln', () => {
    const random1 = rollDice()
    const random2 = rollDice()
    assertEquals(random1, (random1 < 7 && random1 > 0))
    assertEquals(random2, (random2 < 7 && random2 > 0))
});

Deno.test('2x Würfeln und Summe richtig auswerten', () => {
    const result = rollTwoDice() // returns js object
    assertEquals(result.sum, (result.one + result.two))
})