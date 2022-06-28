// variable of the primary key for each piece of pottery. value of 1
let idNumber = 1

// const potteryObject = []

export const makePottery = (type, weighs, size) => {

    let potteryObject = {
            shape: type,
            weight: weighs,
            height: size,
            id: idNumber 
        }
    
    idNumber++ //value will increase each time function is invoked
return potteryObject
}
