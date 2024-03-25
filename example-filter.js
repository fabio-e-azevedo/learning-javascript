const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
]

const menorQueCinco = (numero) => {
    return numero < 5
}

const newPets1 = pets.filter((pet) => menorQueCinco(pet.age) )

const newPets2 = pets.filter((pet) => {
    return pet.age < 5
})

const newPets3 = pets.filter(({ age }) => menorQueCinco(age) )


const newPets4 = pets.map((pet) => {
    return pet.name
})

const newPets5 = []

pets.forEach((pet) => {
    return newPets5.push(pet.name)
})


const newPets6 = pets.reduce((total, pet) => {
    return total += pet.age
}, 0)

console.log(newPets6)