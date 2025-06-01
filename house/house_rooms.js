export const houseItems = {
    livingRoom: {
        name: "Living Room",
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
        name: Kitchen,
        maxCount: 1,
        furniture: [],
        connectedRooms: ["Living Room"]
    },
    basement: {
        name: Basement,
        maxCount: 1,
        furniture: [],
        connectedRooms: ["Stairs"],
        noNoiseBonus: True
    },
    frontDoor: {
        name: "Front Door",
        maxCount: 1,
        furniture: [],
        connectedRooms: ["Living Room"],
        durability: 5,
        startingRoom: true
    }


}