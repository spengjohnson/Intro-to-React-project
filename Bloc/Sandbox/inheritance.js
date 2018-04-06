//Inheritance

/* ####Questions

>What does "DRY" stand for? What does the DRY principle imply in programming or
software development?

A: DRY stands for Don't Repepat Yourself. The DRY principle implies that you want
your code to be easy to maintain and be able to reuse as much code as you can without
having to write redundant code. You are essentially taking something that already exists
and then extending its use. So, the example in the reading shows us how  to reuse
code via the Vehicle example- a car prototype was created by reusing the Vehicle code that was
already written.
*/

function Product (type, brand){
  this.type = type;
  this.brand = brand;
};
Product.prototype.getType = function getType(){
  return this.type;
};

Product.prototype.getBrand = function getBrand(){
return this.brand;
};

function Lotion(type){
  Product.call(this, type, 'lotion');
}

Lotion.prototype = Object.create(Product.prototype);
Lotion.prototype.constructor = Lotion;
Lotion.parent = Product.prototype;
Lotion.prototype= getType = function() {
  return "The is the type of product: " + this.type;
};

var Lotion = new Lotion ('Aveeno');
console.log (Lotion.getType());
console.log (Lotion.getBrand());
--------------------------
function Shampoo(type){
  Product.call (this, type, 'shampoo');
}
Shampoo.prototype = Object.create(Product.prototype);
Shampoo.prototype.construtor = Shampoo;
Shampoo.parent = Product.prototype;
Shampoo.prototype.getType = function () {
  return "This is the type of product: " + this.type;
};

var Shampoo = new Shampoo ('Dove');
console.log(Shampoo.getType());
console.log(Shampoo.getBrand());
-------------------------
function Soap(type){
  Product.call(this, type, 'soap');
}

Soap.prototype = Object.create(Product.prototype);
Soap.prototype.constructor = Soap;
Soap.parent = Product.prototype;
Soap.prototype.getType = function () {
  return "This is the type of product: " + this.type;
};
var Soap = new Soap ('Dove bodywash');
console.log(Soap.getType());
console.log(Soap.getBrand());
