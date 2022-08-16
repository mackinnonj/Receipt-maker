// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
// use for of loop because it can loop over iterable objects such as arrays
function getPrices(taxBoolean) {
        for (let dish of dishData){
            
            //Step 3 
            var finalPrice;
            
            //step 4
            if (taxBoolean == true) {
                finalPrice = dish.price * tax 
            }
            //Step 5
            else if(taxBoolean == false) {
                finalPrice = dish.price
            }
                //step 6
            else {
                console.log("You need to pass a boolean to the getPrices call!")
                return `to "jump out" of the further function execution`
            }

            // step 7
            console.log(`Dish: ${dish.name} Price: $${finalPrice}`)
        }
    }
    

// step 8 Implement getDiscount()
function getDiscount(taxBoolean, guests) {

    //step 9
    getPrices(taxBoolean)

    //step 10 
    //Using the "typeof" operator checks to make sure the parameter passed into the "getDiscount" function is a number and not something such as a string
    var guestNum = typeof (guests) == 'number' && guests > 0 && guests < 30;
    if (guestNum == true) {
        //step 11
        var discount = 0
        
        if (guests < 5) {
            discount = 5
        }
        else if (guests >= 5) {
            discount = 10
        }
        console.log('Discount is: $' + discount)
    }
    else {
        console.log('The second argument must be a number between 0 and 30')
    } 
}

// Call getDiscount()
// true includes tax, false doesnt include tax, discount is based off of number of guests
// getDiscount(true, 2)
// getDiscount(false, 10)
