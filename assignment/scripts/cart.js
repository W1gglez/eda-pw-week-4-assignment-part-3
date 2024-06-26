console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
  if (isFull()) {
    return false;
  } else {
    basket.push(item);
    return true;
  }
}

console.log(`Items in basket: ${basket}`);
console.log(`Adding bread: `, addItem('Bread'));
console.log(`Items in basket: ${basket}`);

function listItems() {
  for (let item of basket) {
    console.log(item);
  }
}

addItem('Eggs');
addItem('Milk');

console.log(listItems());

function empty() {
  while (basket.length > 0) {
    basket.pop();
  }
}

empty();
console.log(`Items in basket: ${basket}`);

function isFull() {
  if (basket.length >= maxItems) {
    return true;
  } else {
    return false;
  }
}
addItem('Milk');
addItem('Milk');
addItem('Milk');
addItem('Milk');
addItem('Milk');
console.log(isFull());

empty();
addItem('Milk');
addItem('Milk');
addItem('Milk');
console.log(isFull());

empty();

console.log(`Adding bread: `, addItem('Bread'));
console.log(`Items in basket: ${basket}`);

console.log(`Adding Milk: `, addItem('Milk'));
console.log(`Items in basket: ${basket}`);

console.log(`Adding Eggs: `, addItem('Eggs'));
console.log(`Items in basket: ${basket}`);

console.log(`Adding Butter: `, addItem('Butter'));
console.log(`Items in basket: ${basket}`);

console.log(`Adding v: `, addItem('PB'));
console.log(`Items in basket: ${basket}`);

console.log(`Adding Jelly: `, addItem('Jelly'));
console.log(`Items in basket: ${basket}`);

function removeItem(item) {
  if (basket.indexOf(item, 0) >= 0) {
    let removed = basket.splice(basket.indexOf(item), 1).toString();
    return removed;
  } else {
    return null;
  }
}

console.log(`Removed: `, removeItem('Jelly'));
console.log(`Items in basket: ${basket}`);

console.log(`Removed: `, removeItem('Bread'));
console.log(`Items in basket: ${basket}`);

console.log(`Removed: `, removeItem('Eggs'));
console.log(`Items in basket: ${basket}`);

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== 'undefined' ? basket : undefined,
    addItem: typeof addItem !== 'undefined' ? addItem : undefined,
    listItems: typeof listItems !== 'undefined' ? listItems : undefined,
    maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
    empty: typeof empty !== 'undefined' ? empty : undefined,
    isFull: typeof isFull !== 'undefined' ? isFull : undefined,
    removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
