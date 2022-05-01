const explorers = [{
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },

    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },

    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

/* Ejemplo 1 */
console.log("\nEjemplo 1: Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
explorers.forEach(explorer => console.log(explorer["name"]))

/* Ejemplo 2 */
console.log("\nEjemplo 2: Imprime el stack de cada explorer, usa FOR EACH")
explorers.forEach(explorer => console.log(explorer["stack"]))

/* Ejemplo 3 */
console.log("\nEjemplo 3: Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
const explorerStacks = explorers.map(function (stacks) {
    return stacks.stack
})
console.log(explorerStacks)

/* Ejemplo 4 */
const explorersContainingJs = explorers.filter(
    (stacks) => stacks.stack.includes('js')
)
console.log("\nEjemplo 4: Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
console.log(explorersContainingJs)

/* Ejemplo 5 */
console.log("\nEjemplo 5: Busca el primer explorer que sea de la CDMX, usa FIND")
const cdmx = explorers.find(
    (cdmx) => cdmx.city == "CDMX"
)
console.log(cdmx)

/* Ejemplo 6 */
console.log("\nEjemplo 6: Obtén la suma de todos los exercises_completed, usa REDUCE")
const suma_excercises = explorers.reduce(
    (value, element) => value + element.exercises_completed, 0)
console.log(suma_excercises)

/* Ejemplo 7 */
console.log("\nEjemplo 7: Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
const atLeastOne = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true)
console.log(atLeastOne)

/* Ejemplo 8 */
console.log("\nEjemplo 8: Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
const allOfThem = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
console.log(allOfThem)