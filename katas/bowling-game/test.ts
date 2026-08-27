import assert from 'node:assert/strict';
import { BowlingGame } from './bowling-game.ts';

const game = new BowlingGame();

assert.equal(game.score(), 0);
console.log('Bowling Game kata scaffold: PASS');