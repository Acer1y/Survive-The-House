import { houseItems } from "./house_items.js"
import { houseObjects } from "./house_furniture.js"
import { houseRooms } from "./house_rooms.js"

function generateHouse(houseRooms, houseObjects, houseItems) {
    const layout = {
        rooms: {},
        furniture: {},
    }

    let roomInstanceCounts = {}
    let furnitureIdCounter = 0

    // Generate proper number of rooms using max_count and math random method.
    for (const [roomKey, roomDef] of Object.entries(houseRooms)) {
        const count = (roomDef.maxCount > 1)
            ? Math.floor(Math.random() * roomDef.maxCount) + 1
            : roomDef.maxCount

        roomInstanceCounts[roomKey] = count

        for (let i = 1; i <= count; i++) {
            const instanceId = `${roomKey}-${i}`
            layout.rooms[instanceId] = {
                id: instanceId,
                name: roomDef.name,
                type: roomKey,
                connectedTo: [...(roomDef.connectedRooms || [])],
                furniture: [],
                ...(roomDef.startingRoom ? { startingRoom: true } : {}),
                ...(roomDef.noNoiseBonus ? { noNoiseBonus: true } : {}),
                ...(roomDef.durability ? { durability: roomDef.durability } : {}),
            }
        }
    }


    // Old room logic below
    /*
    // Generate the rooms based on the max count property
    for (const [roomKey, roomDef] of Object.entries(houseRooms)) {
        const count = roomDef.maxCount || 1
        roomInstanceCounts[roomKey] = count

        for (let i = 1; i <= count; i++) {
            const instanceId = `${roomKey}-${i}`
            layout.rooms[instanceId] = {
                id: instanceId,
                name: roomDef.name,
                type: roomKey,
                connectedTo: [...(roomDef.connectedRooms || [])],
                furniture: [],
                ...(roomDef.startingRoom ? { startingRoom: true} : {}),
                ...(roomDef.noNoiseBonus ? { noNoiseBonus: true } : {}),
                ...(roomDef.durability ? { durabiilty: roomDef.durability } : {}),

            }
        }
    }
    */
    // Add furniture to the defined rooms based on furniture.room[] 
    for (const [furnitureKey, furnitureDef] of Object.entries(houseObjects)) {
        for (const targetRoom of furnitureDef.room || []) {
            const roomKeys = Object.keys(layout.rooms).filter(r => r.startsWith(targetRoom.toLowerCase()))
            for (const roomId of roomKeys) {
                const furnitureId = `furn-${furnitureIdCounter++}`
                const placedFurniture = {
                    id: furnitureId,
                    label: furnitureDef.label || furnitureKey,
                    type: furnitureKey,
                    room: roomId,
                    durability: furnitureDef.durability || null,
                    usedFor: furnitureDef.usedFor || [],
                    resources: furnitureDef.resources || {},
                    items: []
                }
                ;

                // Now populate the items if defined
                if (furnitureDef.items) {
                    for (const itemName of furnitureDef.items) {
                        const itemDef = Object.values(houseItems).find(i => i.name === itemName)
                        if (itemDef) {
                            // Create simple spawn logic, this is 75% chance an item appears
                            if (Math.random() < 0.75) {
                                placedFurniture.items.push(itemDef.name)
                            } else {
                                console.warn(`Item "${itemName}" does not exist in houseItems`)
                            }

                        }
                    }
                    

                }
                layout.furniture[furnitureId] = placedFurniture
                layout.rooms[roomId].furniture.push(furnitureId)

            }
        }
    }
    return layout
}



export const houseLayout = generateHouse(houseRooms, houseObjects, houseItems);

console.log(houseLayout)