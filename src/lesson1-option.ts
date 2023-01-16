// everything you could possibly need to know about a Horse
export type Horse = {
  type: 'HORSE'
  name: string
  legs: number
  hasTail: boolean
}

// the type of a Horse that is pretty standard, all told
type StandardHorse = {
  name: string
  hasTail: true
  legs: 4
  type: 'STANDARD_HORSE'
}

// our extensive dataset of two (2) horses
export const standardHorses: Horse[] = [
  {
    type: 'HORSE',
    name: 'CHAMPION',
    legs: 3,
    hasTail: false,
  },
  {
    type: 'HORSE',
    name: 'HOOVES_GALORE',
    legs: 4,
    hasTail: true,
  },
]

// OK FUNCTIONS

// our somewhat basic horse getting function
const getHorse = (name: string) => {
  let found
  standardHorses.forEach((standardHorse) => {
    if (standardHorse.name === name) {
      found = standardHorse
    }
  })
  return found
}

// a function that improves the formatting of a horse's name
// as it rightly deserves
const tidyHorseName = (horse: Horse): Horse => {
  return {
    ...horse,
    name: horse.name.toLowerCase(),
  }
}
// a validation function to check whether a Horse can also
// be a StandardHorse
const mandatoryTailCheck = (
  horse: Horse
): StandardHorse | undefined => {
  if (!horse.hasTail || horse.legs !== 4) {
    return undefined
  }
  return {
    name: horse.name,
    hasTail: true,
    legs: 4,
    type: 'STANDARD_HORSE',
  }
}

// a naive reference implementation of a horse finding function
export const horseFinder = (name: string): string => {
  const horse = getHorse(name)

  const tidyHorse = horse ? tidyHorseName(horse) : undefined

  const standardHorse = tidyHorse
    ? mandatoryTailCheck(tidyHorse)
    : undefined

  if (!standardHorse) {
    return `${name} is not a good horse`
  }
  return `Found a good horse named ${standardHorse.name}`
}

/*
 * Let's make the above more elegant and 10x
 *
 * first, we're going to need the following functions:
 */

type Option<A> = { type: 'Some'; value: A } | { type: 'None' }

// some :: A -> Option A
export const some = <A>(a: A): Option<A> => ({
  type: 'Some',
  value: a,
})

// none :: () -> Option never
export const none = (): Option<never> => ({ type: 'None' })

// FUNCTIONS THAT WE MIGHT WANT TO IMPLEMENT TO HELP US

// isSome :: Option A -> Boolean
export const isSome = <A>(input: Option<A>) : Boolean => {
  if (input.type === 'Some') {
    return true;
  }
  return false;
}

// isNone :: Option A -> Boolean
export const isNone = <A>(input: Option<A>) : Boolean => {
  if (input.type === 'Some') {
    return false;
  }
  return true;
}

// map :: (A -> B) -> Option A -> Option B
export const map = <A,B>(f: (a:A) => B, option: Option<A>) : Option<B> => 
  option.type === 'Some' ? some(f(option.value)) : none()

// orElse :: (A -> B) -> B -> Option A -> B
export const orElse = <A,B>(f: (a:A) => B, alternative: B, option: Option<A>) : B => {
  return option.type === 'Some' ? f(option.value) : alternative
}

// join :: Option (Option A) -> Option A
export const join = <A>(option: Option<Option<A>>) : Option<A> => {
  return option.type === 'Some' ? option.value : none()
}

// bind :: (A -> Option B) -> Option A -> Option B
export const bind = <A,B>(f: (a:A) => Option<B>, option: Option<A>) : Option<B>  => {
  if (option.type === 'Some') {
    return f(option.value)
  }
  return none()
}

// THE NEW FUNCTIONS WE NEED TO WRITE

// newGetHorse :: String -> Option<Horse>
export const newGetHorse = (name: string) => {
  let found
  standardHorses.forEach((standardHorse) => {
    if (standardHorse.name === name) {
      found = some(standardHorse)
    }
  })
  if (found === undefined) {
    return none()
  }
  return found
} 

// newMandatoryTailCheck :: Horse -> Option<StandardHorse>
export const newMandatoryTailCheck = (
  horse: Horse
) => {
  if (!horse.hasTail || horse.legs !== 4) {
    return none()
  }
  return {
    type: 'Some',
    value: { name: horse.name,
             hasTail: true,
             legs: 4,
             type: 'STANDARD_HORSE',
           }
  }
}

// newHorseFinder :: String -> String
export const newHorseFinder = (name: string): string => {
  const horse = newGetHorse(name).type === 'None' ? undefined : getHorse(name)

  const tidyHorse = horse ? tidyHorseName(horse) : undefined

  const standardHorse = tidyHorse
    ? newMandatoryTailCheck(tidyHorse)
    : undefined

  if (!standardHorse || standardHorse.type == 'None') {
    return `${name} is not a good horse`
  }
  return standardHorse.type == 'Some' ? `Found a good horse named ${standardHorse.value.name}` : ''
}
