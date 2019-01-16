//Put the start of your program in a main function.
// Ask the user what size shirt they want to order (you decide the shirt sizes).
// Once they select the size of shirt add their selection to an array.

function main() {
    var quest = prompt("What size shirt do you want to order?");
    var arr = ["XS","S","M","L","XL","XXL"];
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
            console.log("");

    }
}
main();

