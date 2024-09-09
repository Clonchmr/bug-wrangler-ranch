const { database } = require("./database.js")

const hireDrovers = (herdSize) => {
    const droverArray = []
    const allDrovers = database.drovers
    const numberNeeded = herdSize / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        droverArray.push(allDrovers[randomHerderId])
    }

return droverArray
}

module.exports = { hireDrovers }