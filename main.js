// Order has a Pizza
// DeepDish is a Pizza
// ThinCrust is a Pizza
// Pizza has a Topping
// Pepperoni is a Topping
// Mushroom is a Topping
// Order has a Beverage
// Soda is a Beverage
// FruitPunch is a Beverage

function Order() {
  this.pizzas = []
  this.beverages = []
}

// Order.prototype.pizzas = []
// Order.prototype.beverage = []

function Pizza () {
  this.toppings = []
}

function DeepDish () {
  // this.thickness = 'Deep'
}

DeepDish.prototype = new Pizza()
DeepDish.prototype.thickness = 'Deep'

function ThinCrust () {

}

ThinCrust.prototype = new Pizza()
ThinCrust.prototype.thickness = 'Thin'

function Topping () {

}

function Pepperoni() {

}

Pepperoni.prototype = new Topping()

function Mushroom () {

}

Mushroom.prototype = new Topping()

function Beverage () {

}

function Soda () {

}

Soda.prototype = new Beverage()

function FruitPunch () {

}

FruitPunch.prototype = new Beverage()
