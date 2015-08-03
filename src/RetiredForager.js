var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.food = ForagerBee.prototype.food;
  this.treasureChest =[];

};

RetiredForagerBee.prototype = new ForagerBee();
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function (){return "I am too old, let me play cards instead"};
RetiredForagerBee.prototype.eat = ForagerBee.prototype.eat;
RetiredForagerBee.prototype.gamble = function (treasure){
  this.treasureChest.push(treasure);
}
