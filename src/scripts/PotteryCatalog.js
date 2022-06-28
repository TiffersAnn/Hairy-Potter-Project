const potteryToSell = []

export const toSellOrNotToSell = (objectMade) => {

    if (objectMade.cracked === false) {potteryToSell.push(objectMade)}

    else if (objectMade.weight >= 6) {objectMade.price = 40} 

    else if(objectMade.weight <6) {objectMade.price = 20}

    return potteryToSell

}

export const usePottery = () => {
    return potteryToSell.map(art => ({...art}))
}