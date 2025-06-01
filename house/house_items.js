export const houseItems = {
    uselessBook: {
        name: "Useless Book",
        attribs: ["Combustable"]
    },
    lockPickingBook: {
        name: "Lock Picking for Dummies",
        attribs: ["Skill Book"],
        skill: ["Lock Picking"],
        xp: 100,
        maxVol: 10,
    },
    shootingBook: {
        name: "Shooting the Broadside of a Barn",
        attribs: ["Skill Book"],
        skill: ["Shooting"],
        xp: 100,
        maxVol: 10,
    },
    electronicsBook: {
        name: "Electronics and You",
        attribs: ["Skill Book"],
        skill: ["Electronics"],
        xp: 100,
        maxVol: 10,
    },
    fireBook: {
        name: "Arsonists Bible",
        attribs: ["Skill Book"],
        skill: ["Firestarting"],
        xp: 100,
        maxVol: 10,
    },
    animalBook: {
        name: "Animal Hunsbandry: Not it's not about furries!",
        attribs: ["Skill Book"],
        skill: ["Beast Tamer"],
        xp: 100,
        maxVol: 10,
    },
    huntingBook: {
        name: "Trapping: The Opposite of Animal Hunsbandry",
        attribs: ["Skill Book"],
        skill: ["Beast Tamer"],
        xp: 100,
        maxVol: 10,
    },
    huntingBook: {
        name: "Trapping: The Opposite of Animal Hunsbandry",
        attribs: ["Skill Book"],
        skill: ["Beast Tamer"],
        xp: 100,
        maxVol: 10,
    },
    chefKnife: {
        name: "Chefs Knife",
        attribs: ["Weapon"],
        damage: 5,
        range: 1
    },
    fork: {
        name: "Fork",
        attribs: ["Utensil"],
    },
    spoon: {
        name: "Spoon",
        attribs: ["Utensil"],
    },
    cannedMeat: {
        name: "Canned Meat",
        attribs: ["Food"],
        hunger: {heated: 25, cold: 10}
    },
    cereal: {
        name: "Cereal",
        attribs: ["Food"],
        hunger: 15,
        thirst: -7
    },
    chocolateBar: {
        name: "Chocolate Bar",
        attribs: ["Food"],
        hunger: 10,
        thirst: -5
    },
    energyBar: {
        name: "Energy Bar",
        attribs: ["Food"],
        hunger: 20,
        thirst: -5
    },
    cannedFruit: {
        name: "Canned Fruit",
        attribs: ["Food"],
        hunger: 25, 
        thirst: 10       
    },
    castIronPan: {
        name: "Cast Iron Pan",
        attribs: ["Weapon", "Cookery"],
        damage: 15,
        range: 1
    },
    flashlight: {
        name: "Flashlight",
        attribs: ["Light"],
        requires: ["Batteries"],
        consumes: 2
    },
    batteries: {
        name: "Batteries",
        attribs: ["Consumable"],
        usedBy: ["Flashlight"],
        maxQuantity: 4,
        minQuantity: 2
    },
    ammo22: {
        name: ".22 Ammo",
        attribs: ["Consumable"],
        usedBy: [".22 Rifle"],
        maxQuantity: 50,
        minQuantity: 1,
    },
    ammo9mm: {
        name: "9mm Ammo",
        attribs: ["Consumable"],
        usedBy: ["9mm Pistol"],
        maxQuantity: 50,
        minQuantity: 1,
    },
    ammo12g: {
        name: "Shotgun Ammo",
        attribs: ["Consumable"],
        usedBy: ["Shotgun"],
        maxQuantity: 12,
        minQuantity: 1,
    },
    pistol: {
        name: "9mm Pistol",
        attribs: ["Weapon"],
        consumes: "9mm Ammo",
        damage: 25,
        range: 1
    },
    rifle22: {
        name: ".22 Rifle",
        attribs: ["Weapon"],
        consumes: ".22 Ammo",
        damage: 30,
        range: 1,
    },
    shotgun: {
        name: "Shotgun",
        attribs: ["Weapon"],
        consumes: "Shotgun Ammo",
        damage: 125,
        range: 1
    },
    clothes: {
        name: "Clothes",
        attribs: ["Consumable"],
        usedFor: ["breakdown"],
        resources: {cloth: 2},
    },
    buckKnife: {
        name: "Buck Knife",
        attribs: ["Weapon", "tool"],
        damage: 5,
        range:1 
    },
    tissues: {
        name: "Tissues",
        attribs: ["Consumable"],
        usedFor: ["fire"]
    }

}