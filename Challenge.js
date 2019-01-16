//Using problem 3, after the user selects a shirt size ask them if they want to add another shirt to the cart.
// If they say yes, add another shirt to the array,
// if they say no exit the function,
// if they enter something else say ERROR and let them pick yes/no again.

function main() {
    var arr = ["XS","S","M","L","XL","XXL"];
    var anotherShirt = "";
    while(anotherShirt != "no"){

    var quest = prompt("What size shirt do you want to order?");

    switch (quest) {
        case 'XS':
            console.log(arr[0]);
            break;
        case 'S':
            console.log(arr[1]);
            break;
        case 'M':
            console.log(arr[2]);
            break;
        case 'L':
            console.log(arr[3]);
            break;
        case 'XL':
            console.log(arr[4]);
            break;
        case 'XXL':
            console.log(arr[5]);
            break;
        default:
            console.log("ERROR");
    }
       var anotherShirt = prompt("Do you want to add another shirt to the cart?");
    }
}
main();

