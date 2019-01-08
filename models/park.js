const Park = function (name, price, dinosaurs) {
  this.name = name;
  this.price = price;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  this.dinosaurs.splice(this.dinosaurs.indexOf(dinosaur),1);
};

Park.prototype.mostAttractiveDinosaur = function(){

  let mostAttractive = this.dinosaurs[0];
  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > mostAttractive.guestsAttractedPerDay) {
      mostAttractive = dinosaur;
    }
  }
  return mostAttractive;
};

module.exports = Park;
