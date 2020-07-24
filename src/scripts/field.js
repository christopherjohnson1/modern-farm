let seedBank = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)){
        for (const type of seedObj){
            seedBank.push(type)
        }
    } else {
        seedBank.push(seedObj)
    }
}

export const usePlants = () => {
    return seedBank.slice()
}