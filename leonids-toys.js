const toys = [
    {
        id: 1,
        type: "game console",
        name: "Nintendo 64",
        brand: "Nintendo",
        price: 100,
        batteries: false,
    },
    {
        id: 2,
        type: "action figure",
        name: "Batman",
        brand: "DC",
        price: 20,
        batteries: false,
    },
    {
        id: 3,
        type: "book",
        name: "Bear on a Bike",
        brand: "Barefoot Books",
        price: 10,
        batteries: false,
    }
]

const ball = {
    id: 4,
    type: "sports",
    name: "basketball",
    brand: "Spalding",
    price: 20,
    batteries: false,
}

const puzzle = {
    id: 5,
    type: "board game",
    name: "Ice Cream Stand",
    brand: "Heye",
    price: 5,
    batteries: false
}

toys.push(ball);
toys.push(puzzle)

for (const toy of toys) {
    toy.price += toy.price * .05
    console.log(`The ${toy.type} ${toy.name} costs ${toy.price}.`)
}


const videoGame = {
    type: "video game",
    name: "Zelda: Ocarina of Time",
    brand: "Zelda",
    price: 65,
    batteries: false,
}

const addToy = (newToy, list) => {
    const newId = list.length + 1;
    newToy.id = newId;
    list.push(newToy);
    console.log(list)
}

addToy(videoGame, toys)

const removeProduct = (idInFunc, array) => {

    for (let i = 0; i < array.length; i++) {
        if (array[i].id === idInFunc) {
            array.splice(i, 1)
        }
    }
    return array
}

removeProduct(5, toys);
console.log(toys)