export const houseRooms = {
    livingRoom: {
        name: "livingRoom",
        connectedRooms: ["Hallway", "Kitchen"],
        furniture: [],
        maxCount: 1
    },
    bedroom: {
        name: "Bedroom", 
        maxCount: 4,
        furniture: [],
        connectedRooms: ["Hallway"]
    },
    kitchen: {
        name: "Kitchen",
        maxCount: 1,
        furniture: [],
        connectedRooms: ["Living Room"]
    },
    basement: {
        name: "Basement",
        maxCount: 1,
        furniture: [],
        connectedRooms: ["Stairs"],
        noNoiseBonus: true
    },
    frontDoor: {
        name: "frontdoor",
        maxCount: 1,
        furniture: ["Door"],
        connectedRooms: ["Living Room"],
        durability: 5,
        startingRoom: true
    }
}