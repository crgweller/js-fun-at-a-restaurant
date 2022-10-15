function createRestaurant(name) {
var pizzaRestaurant = {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
  }

}
return pizzaRestaurant
}

function addMenuItem(restaurant, food) {
if (food.type === 'breakfast' && restaurant.menus.breakfast.includes(food) === false) {
      restaurant.menus.breakfast.push(food)
  } else if (food.type === 'lunch' && restaurant.menus.lunch.includes(food) === false) {
    restaurant.menus.lunch.push(food)
  } else if (food.type === 'dinner' && restaurant.menus.dinner.includes(food) === false) {
    restaurant.menus.dinner.push(food)
  }
}

function removeMenuItem(restaurant, food, meal) {
  for (var i = 0; i < restaurant.menus[meal].length; i++)
    if (food === restaurant.menus[meal][i].name) {
  restaurant.menus[meal].splice(i, 1)
return `No one is eating our ${food} - it has been removed from the ${meal} menu!`
}
return `Sorry, we don't sell ${food}, try adding a new recipe!`
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
