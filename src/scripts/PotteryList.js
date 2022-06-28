import {} from '/PotteryCatalog.js'

export const PotteryList = () => {

    const pottery = getPottery()

    let htmlString = '<article class= "potteryList">'
    

    htmlString += <section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">Mug</h2>
        <div class="pottery__properties">
        Item weighs 3 grams and is 6 cm in height</div>
        <div class="pottery__price">Price is $20</div>
    </section>

       
    htmlString += '</article>'

    return htmlString
}