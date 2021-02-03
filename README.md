# :egg: Functional Programming Is Boring :egg:

## A completely OK short course on FP for Bulb Engineers.

Click on the words for information about subjects and things.

[Intro](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/intro.md)

## Part 1

### Lesson 1 - Option

[Information](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/slides/lesson1-option.md)

[Exercises](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/src/lesson1-option.ts)

### Lesson 2 - Either

[Information](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/slides/lesson2-either.md)

[Exercises](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/src/lesson2-either.ts)

### Lesson 3 - Optics

[Information](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/slides/lesson3-optics.md)

[Exercises](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/src/lesson3-optics.ts)

### Lesson 4 - TaskEither

[Information](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/slides/lesson4-task-either.md)

[Exercises](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/src/lesson4-task-either.ts)

### Lesson 5 - Parsers

[Information](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/slides/lesson5-parsers.md)

[Exercises](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/src/lesson5-parsers.ts)

### Lesson 6 - Validation

[Information](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/slides/lesson6-validation.md)

[Exercises](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/src/lesson6-validation.ts)

## Part 2

### Lesson 7 - Monoids

[Information](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/slides/lesson7-semigroup-monoid.md)

[Exercises](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/src/lesson7-semigroups-monoids.ts)

### Lesson 8 - Reader

[Information](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/slides/lesson8-reader.md)

[Exercises](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/src/lesson8-reader.ts)

### Lesson 9 - Continuations

[Information](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/slides/lesson9-continuations.md)

[Exercises](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/src/lesson9-continuations.ts)

## Examples

Some more concrete examples of FP in the wild (please feel free to contribute here if you find something worth sharing)

[Option](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/examples/Option.ts)

[Either](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/examples/Either.ts)

[io-ts validator](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/examples/io-ts.ts)

## Extra meandering things that didn't fit into any lesson

### Bonus 1 - Currying

[Information](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/slides/currying.md)

### Bonus 2 - Complexity

[Information](https://github.com/danieljharvey/functional-programming-is-boring/blob/master/slides/complexity.md)

## Installing stuff

The exercises are in Typescript and be run as such:

```bash
yarn install

# tests
yarn test:watch

# typechecker
yarn typescript:watch
```

The tests for each exercise live in `src/tests`, and are all skipped, enable the ones you want to try.
