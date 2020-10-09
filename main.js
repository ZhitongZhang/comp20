const HOTDOG_PRICE = 3.25;
const FRENCH_FRIE_PRICE = 2.00;
const DRINK_PRICE = 1.50;
function validate(quantity, fail_message)
{
    if (Number.isInteger(Number(quantity))  && parseInt(quantity) >= 0)
    {
        quantity = parseInt(quantity);
    }
    else{
        while (!Number.isInteger(Number(quantity)) || parseInt(quantity) < 0)
        {
            quantity = window.prompt(fail_message);
        }
        quantity = parseInt(quantity);
    }  

    return quantity;
}
var hotdog_c =window.prompt("How many hotdogs do you want?");
hotdog_c = validate(hotdog_c,"Please enter a valid # of hotdogs you want!");

var frenchfrie_c = window.prompt("How many frenchfries?");
frenchfrie_c = validate(frenchfrie_c, "Please enter a valid # of frenchfries you want!");

var drink_c = window.prompt("How many drinks do you want?");
drink_c = validate(drink_c, "Please enter a valid # of drinks you want!");

total = hotdog_c * HOTDOG_PRICE + frenchfrie_c * FRENCH_FRIE_PRICE + drink_c * DRINK_PRICE;

document.getElementById("hotdog").innerHTML = "#Hotdog(s): " + hotdog_c + " at $" + HOTDOG_PRICE + " is $" + HOTDOG_PRICE * hotdog_c;
document.getElementById("frenchfrie").innerHTML = "#FrenchFrie(s): " + frenchfrie_c + " at $" + FRENCH_FRIE_PRICE + " is $" + FRENCH_FRIE_PRICE * frenchfrie_c;
document.getElementById("drink").innerHTML = "#Drink(s): " + drink_c + " at $" + DRINK_PRICE + " is $" + DRINK_PRICE * drink_c;
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
if (total >= 20)
{
    document.write("You quality for our 10% discount! You're saving: " + formatter.format(total * .1) );
    total = total * .9;
}

document.write("</br> Your subtotal is: " + formatter.format(total));
document.write("</br> Meal Tax: " + formatter.format(total * .0625));
document.write("</br> Total: " + formatter.format(total * 1.0625));


