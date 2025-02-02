//Convert these Miles to KM! 
const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]

const conversionFactorMilesToKm = 1.6

function convertMilesToKms() {
    return distanceWalkedMilesArr.map(function (distanceMiles, index) {
        return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`
    })
}

console.log(convertMilesToKms())



