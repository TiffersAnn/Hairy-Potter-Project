// Imports go first
import {makePottery} from './PotteryWheel.js'
import {firePottery} from './Kiln.js'
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'

// console.log(makePottery())
// console.log(firePottery())


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 3)
console.log(mug)

let bowl = makePottery("bowl", 3, 2)
console.log(bowl)

let plate = makePottery("plate", 2, 8)
console.log(plate)

let pitcher = makePottery("pitcher", 4, 12)
console.log(pitcher)

let trivet = makePottery("trivet", 3, 6)
console.log(trivet)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2400)
console.log(firedMug)

let firedBowl = firePottery(bowl, 2300)
console.log(firedBowl)

let firedPlate = firePottery(plate, 1500)
console.log(firedPlate)

let firedPitcher = firePottery(pitcher, 2000)
console.log(firedPitcher)

let firedTrivet = firePottery(trivet, 1700)
console.log(firedTrivet)



// Determine which ones should be sold, and their price
let mugToSell = toSellOrNotToSell(mug)
console.log(mugToSell)

let bowlToSell = toSellOrNotToSell(bowl)
console.log(bowlToSell)

let plateToSell = toSellOrNotToSell(plate)
console.log(plateToSell)

let pitcherToSell = toSellOrNotToSell(pitcher)
console.log(pitcherToSell)

let trivetToSell = toSellOrNotToSell(trivet)
console.log(trivetToSell)

usePottery()
console.log(usePottery)


// Invoke the component function that renders the HTML list



