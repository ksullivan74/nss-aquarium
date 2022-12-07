const database =
{
    fish: [
        {
            name: "Clown Fish",
            species: "Fish",
            length: 12,
            location: "Cayman Islands",
            food: "Fish Food"
        },
        {
            name: "Hawk Fish",
            species: "Fish",
            length: 12,
            location: "Cayman Islands",
            food: "Fish Food"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}