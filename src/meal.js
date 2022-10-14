function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
var menuItem = {
  name: name,
  price: price,
  type: type
  }
  return menuItem;
}

function addIngredients(newStuff, ingredients) {
  if (!ingredients.includes(newStuff)) {
    ingredients.push(newStuff)}
  // if newStuff is already in ingredients
    // do nothing
  // if newStuff is not in ingredients
    //add it
  return ingredients
}

function formatPrice(formatted) {
  var formattedPrice = {
    formatted: formatted
  }
return `$${formatted}`
}

function decreasePrice(decreased) {
  var decreasedPrice = decreased
  return decreased * .9
}

function createRecipe(title, ingredients, menuItemType) {
var recipe = {
  title: title,
  ingredients: ingredients,
  type: `${menuItemType}`
}
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
