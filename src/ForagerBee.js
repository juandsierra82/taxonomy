var ForagerBee = function() {
  Bee.call(this);
  this.age =10;
  this.job = 'find pollen';
  this.food = Bee.prototype.food;
  this.canFly = true;
  this.treasureChest =[];


};


ForagerBee.prototype = new Bee();
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.eat = Bee.prototype.eat;
ForagerBee.prototype.forage = function (treasure){
  this.treasureChest.push(treasure);
}



