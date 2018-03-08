// Write an expression using array iterator methods (like filter and reduce)
// to compute the total value of the machines in the inventory array.
// Use arrow functions.

const inventory = [
  {type: "machine", value: 5000},
  {type: "machine", value: 650},
  {type: "duck", value: 10},
  {type: "furniture", value: 1200},
  {type: "machine", value: 77}
]

let totalMachineValue = inventory.reduce(function(accumulator, item) {
  if (item.type === 'machine') {
    accumulator += item.value 
  }
  return accumulator
}, 0);

console.log(totalMachineValue)

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Accounting
