type Either<E,A> = { type: "Left", value: E }
                 | { type: "Right", value: A }

type Horse = { type: "HORSE"; name: string; legs: number; hasTail: boolean };

const horses: Horse[] = [
  {
    type: "HORSE",
    name: "CHAMPION",
    legs: 3,
    hasTail: false
  },
  {
    type: "HORSE",
    name: "HOOVES_GALORE",
    legs: 4,
    hasTail: true
  }
];

// left :: E -> Either E never

// right :: A -> Either never A

const getHorse = (name: string): Either<string, Horse> => {
  const found = horses.filter(horse => horse.name === name)
  return found[0] ? right(found[0]): left(`Horse ${name} not found`)
}

// RENAME HORSE

const tidyHorseName = (horse: Horse): Horse => {
  return {
    ...horse,
    name: horse.name.charAt(0).toUpperCase() + 
        horse.name.slice(1).toLowerCase()
  };
};

// STANDARDISE HORSES

type StandardHorse = {
  name: string;
  hasTail: true;
  legs: 4;
  type: "STANDARD_HORSE";
};

type TailCheckError = { type: "HAS_NO_TAIL" } 
                    | { type: "TOO_MANY_LEGS" } 
                    | { type: "NOT_ENOUGH_LEGS" }


const standardise = (horse: Horse): Either<TailCheckError,StandardHorse> => {
  if (!horse.hasTail) {
    return left({ type: "HAS_NO_TAIL" })
  }
  if (horse.legs < 4) {
    return left({ type: "NOT_ENOUGH_LEGS" })
  }
  if (horse.legs > 4) {
    return left({ type: "TOO_MANY_LEGS" })
  }
  return right({
    name: horse.name,
    hasTail: true,
    legs: 4,
    type: "STANDARD_HORSE"
  })
};

// map :: (A -> B) -> Either E A -> Either E B

// bind :: (A -> Either E B) -> Either E A -> Either E B

// leftMap :: (E -> G) -> Either E A -> Either G A

// id :: A -> A

// bimap :: (E -> G) -> (A -> B) -> Either E A -> Either G B

// (bonus marks - how can we rewrite map and leftMap using bimap and id?)

// match :: (E -> B) -> (A -> B) -> Either E A -> B

// convert this to use the above functions and return Either<string,
// StandardHorse>
const horseFinder = (name: string): Maybe<StandardHorse> => {
  const horse = getHorse(name);

  const tidyHorse = map(tidyHorseName, horse);

  return bind(standardise(horse), tidyHorse);
};

/* PART 2 */

const otherHorses: Horse[] = [
  {
    type: "HORSE",
    name: "ROAST_BEEF",
    legs: 2,
    hasTail: false
  },
  {
    type: "HORSE",
    name: "INFINITE_JEFF",
    legs: 5,
    hasTail: true
  }
];

const getHorse2 = (possibleHorses: Horse[]) => 
  (name: string): Either<string, Horse> => {
    const found = possibleHorses.filter(horse => horse.name === name)
    return found[0] ? right(found[0]): left(`Horse ${name} not found`)
}

// how can we deal with two horse sources now?

// alt :: Either E A -> Either E A -> Either E A

