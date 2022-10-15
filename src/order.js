function takeOrder(orders, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(orders)
  return orders
  }
}

function refundOrder(orderNum, deliveryOrders) {
for (var i = 0; i < deliveryOrders.length; i++) {
  if (orderNum === deliveryOrders[i].orderNumber) {
    deliveryOrders.splice(i, 1)
  }
    }
      }

function listItems(deliveryOrders) {
  var sandwiches = []
  for (var i = 0; i < deliveryOrders.length; i++) {
sandwiches.push(deliveryOrders[i].item)
}
return sandwiches.join(`, `)
    }

function searchOrder(orders, item) {
  var found = false
for (var i = 0; i < orders.length; i++) {
  if (orders[i].item.includes(item)) {
  found = true
  }
}
console.log(found)
return found
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
