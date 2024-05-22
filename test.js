import test from 'ava';
import toRotated from './index.js';

test('rotate array by positive steps', t => {
	t.deepEqual(toRotated([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3]);
});

test('rotate array by negative steps', t => {
	t.deepEqual(toRotated([1, 2, 3, 4, 5], -2), [3, 4, 5, 1, 2]);
});

test('rotate array by zero steps', t => {
	t.deepEqual(toRotated([1, 2, 3, 4, 5], 0), [1, 2, 3, 4, 5]);
});

test('rotate array by length of the array', t => {
	t.deepEqual(toRotated([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
});

test('rotate array by negative length of the array', t => {
	t.deepEqual(toRotated([1, 2, 3, 4, 5], -5), [1, 2, 3, 4, 5]);
});

test('rotate array by more than length of the array', t => {
	t.deepEqual(toRotated([1, 2, 3, 4, 5], 7), [4, 5, 1, 2, 3]);
});
