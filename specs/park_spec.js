const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaurs;

  beforeEach(function () {

    dinosaur1 = new Dinosaur("Utahraptor", "Carnivore", 100);
    dinosaur2 = new Dinosaur("Stenonychosaurus", "Omnivore", 500);
    dinosaur3 = new Dinosaur("Quetzalcoatlus", "Carnivore", 1000);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3];
    park = new Park('Isla Nublar', 10, dinosaurs);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Isla Nublar');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, dinosaurs);
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
