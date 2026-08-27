import assert from 'node:assert/strict';
import { PrimeFactors } from './prime-factors.ts';

const factors = PrimeFactors.generate(1);

assert.deepEqual(factors, []);

console.log('Prime Factors kata scaffold: PASS');