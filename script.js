const animals = [
  { id: 1, name: "Luna", species: "cat", age: 3, adopted: false },
  { id: 2, name: "Biscuit", species: "dog", age: 7, adopted: true },
  { id: 3, name: "Pepper", species: "cat", age: 1, adopted: true },
  { id: 4, name: "Moose", species: "dog", age: 5, adopted: false },
  { id: 5, name: "Charly", species: "dog", age: 4, adopted: false },
  { id: 6, name: "Bill", species: "cat", age: 0.5, adopted: true },
  { id: 7, name: "Chompers", species: "rabbit", age: 0.5, adopted: false },
  { id: 8, name: "Beowulf", species: "dog", age: 7, adopted: true },
];

// Instructions for every task are in README.md.
// Write your code below each heading,
// Be sure to add your own comments to the code you are writing

// ---------------------------------------------------------------------------
// Task 1 — Animal names with .map()
// ---------------------------------------------------------------------------
console.log(animals);

function AN(animals) {
  return animals.name;
}
function avg(animals) {
  return 8 / age;
}

let animalnames = animals.map(AN);

console.log(animalnames);
// ---------------------------------------------------------------------------
// Task 2 — Log each animal with .forEach()
// ---------------------------------------------------------------------------

animals.forEach(function (EA) {
  console.log("name: " + EA.name + " species: " + EA.species);
});

// ---------------------------------------------------------------------------
// Task 3 — Log each animal again with for...of
// ---------------------------------------------------------------------------

for (const animal of animals) {
  console.log(animal);
}

// ---------------------------------------------------------------------------
// Task 4 — Adopted and available animals with .filter()
// ---------------------------------------------------------------------------
let adopted = animals.filter(function (Adop) {
  return Adop.adopted === true;
});
console.log(adopted);
// ---------------------------------------------------------------------------
// Task 5 — Available dogs with method chaining
// ---------------------------------------------------------------------------
let avdogs = animals
  .filter(function (av) {
    return av.adopted === false;
  })
  .filter(function (dogs) {
    return dogs.species === "dog";
  })
  .map(AN);
console.log(avdogs);
// ---------------------------------------------------------------------------
// Task 6 — Average age with .reduce()
// ---------------------------------------------------------------------------
/*
let animalage = animals.reduce(org);
console.log(animalage);
*/
// ---------------------------------------------------------------------------
// Task 7 — Write isCat, isAdopted, and getName
// ---------------------------------------------------------------------------
let iscat = animals.filter(function (cat) {
  if (cat.species === "cat") {
    return true;
  } else {
    return false;
  }
});

let isadopted = animals.filter(function (isadop) {
  return isadop.adopted === true;
});

console.log(iscat);
// ---------------------------------------------------------------------------
// Task 8 — Adopted cats, using your own functions as callbacks
// ---------------------------------------------------------------------------
let adoptedcats = animals
  .filter(function (cat) {
    if (cat.species === "cat") {
      return true;
    } else {
      return false;
    }
  })
  .filter(function (isadop) {
    return isadop.adopted === true;
  })
  .map(AN);

console.log(adoptedcats);
// ---------------------------------------------------------------------------
// Task 9 — Write makeSpeciesChecker (a closure)
// ---------------------------------------------------------------------------
function makespeciesechecher(animals){
  let speciesname = func;

  let speciescheck = animals.filter(function (SC) {
    if animals.species === 
  }


)}
// ---------------------------------------------------------------------------
// Task 10 — Build isDog and isRabbit, then log their names
// ---------------------------------------------------------------------------
let isdog = makespeciesfunc('dog')

Command.log(isdog)