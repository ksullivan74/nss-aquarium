// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const returnFishes = () => 
{
    const fishes = getFish()
    let htmlString = ""
    for (const fish of fishes) {
        htmlString +=
            `<li>${fish.name}</li>
            <li>${fish.species}</li>
            <li>${fish.length}</li>
            <li>${fish.location}</li>
            <li>${fish.food}</li>`
    }
    return htmlString
}


