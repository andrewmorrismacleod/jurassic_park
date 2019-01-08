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
    dinosaur4 = new Dinosaur("Supersaurus", "Herbivore", 400);
    dinosaur5 = new Dinosaur("Utahraptor", "Carnivore", 500);
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

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaurs[3];
    assert.deepStrictEqual(actual, dinosaur4)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur3)
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[dinosaur1, dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostAttractiveDinosaur();
    assert.deepStrictEqual(actual, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur5);
    const actual = park.findAllBySpecies("Utahraptor");
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur5]);
  });

  it('should be able to remove all dinosaurs of a particular species');

});
