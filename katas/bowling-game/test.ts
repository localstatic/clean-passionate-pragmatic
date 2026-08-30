/*

# Contract and rules

game = new Game()
game.roll(pins)
game.score()

    Accept rolls and return the final score.
    There are 10 frames. An open frame has up to 2 rolls.
    A spare uses both rolls for 10 pins and adds the next roll.
    A strike uses one roll for 10 pins and adds the next two rolls.
    The tenth frame can receive bonus rolls after a spare or strike.

# Build it test-first

Start: gutter game, all rolls score 0.

Then: one-pin rolls, an all-open game, one spare, and one strike.

Finish: consecutive strikes, a spare or strike in frame 10, and a perfect game.

all gutters       -> 0
all strikes       -> 300
9 / 0 repeated    -> 90
5 / 5, 3          -> spare + 3 bonus
*/

import assert from 'node:assert/strict';
import { BowlingGame } from './bowling-game.ts';

let game = new BowlingGame();

assert.equal(game.score(), 0);

// Round 0 - all gutters       -> 0
console.log('Testing "all gutters" ...');
game = new BowlingGame();

// 20 gutter balls
game.roll(0); game.roll(0); game.roll(0); game.roll(0); game.roll(0); game.roll(0);
game.roll(0); game.roll(0); game.roll(0); game.roll(0); game.roll(0); game.roll(0);
game.roll(0); game.roll(0); game.roll(0); game.roll(0); game.roll(0); game.roll(0);
game.roll(0); game.roll(0);

assert.equal(game.score(), 0);

// Round 1 - 9 / 0 repeated    -> 90
console.log('Testing "9/0 repeated -> 90" ...');
game = new BowlingGame();
game.roll(9);
game.roll(0);
game.roll(9);
game.roll(0);
game.roll(9);
game.roll(0);
game.roll(9);
game.roll(0);
game.roll(9);
game.roll(0);
game.roll(9);
game.roll(0);
game.roll(9);
game.roll(0);
game.roll(9);
game.roll(0);
game.roll(9);
game.roll(0);
game.roll(9);
game.roll(0);

assert.equal(game.score(), 90);

// Round 2 - 5 / 5, 3          -> spare + 3 bonus
console.log('Testing "5 / 5, 3 -> 16" ...');
game = new BowlingGame();
game.roll(5);
game.roll(5);
game.roll(3);

assert.equal(game.score(), 16);

// Round 3 - all strikes       -> 300
console.log('Testing "all strikes -> 300" ...');
game = new BowlingGame();
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);

assert.equal(game.score(), 300);





// End

console.log('Bowling Game kata scaffold: PASS');

