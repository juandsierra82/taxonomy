var HoneyMakerBee = function() {
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  this.food = Bee.prototype.food;
  this.honeyPot = 0;



};
HoneyMakerBee.prototype = new Bee();
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.eat = Bee.prototype.eat;
HoneyMakerBee.prototype.makeHoney = function (){
  this.honeyPot +=1;
}
HoneyMakerBee.prototype.giveHoney = function (){
  this.honeyPot -=1;
}

