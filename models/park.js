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

Park.prototype.findAllBySpecies = function(species) {
  return this.dinosaurs.filter(dinosaur => dinosaur.species == species);
};

Park.prototype.removeAllBySpecies = function(species) {
  this.dinosaurs = this.dinosaurs.filter(dinosaur => dinosaur.species !== species);
};

Park.prototype.totalVisitorsPerDay = function() {
  const totalVisitors = this.dinosaurs.reduce(function(runningTotal, dinosaur) {
    return runningTotal + dinosaur.guestsAttractedPerDay;
  },0);
  return totalVisitors;
};

module.exports = Park;
