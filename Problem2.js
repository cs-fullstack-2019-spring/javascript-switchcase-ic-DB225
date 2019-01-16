//Put the start of your program in a main function.
// Ask the user to enter a day of the week.
// Print the corresponding Spanish word.
// If they do not input a day of the week say "That is not a day of the week in English."
//
// lunes. Monday.
// martes. Tuesday.
// miércoles. Wednesday.
// jueves. Thursday.
// viernes. Friday.
// sábado. Saturday.
// domingo. Sunday.

function main() {
    var quest = prompt("Enter a day of the week :");
    
    switch (quest) {
        case 'Monday':
            console.log('Lunes');
            break;
        case 'Tuesday':
            console.log('Martes');
            break;
        case 'Wenesday':
            console.log('Miércoles');
            break;
        case 'Thursday':
            console.log('Jueves');
            break;
        case 'Friday':
            console.log('Viernes');
            break;
        case 'Saturday':
            console.log('Sábado');
            break;
        case 'Sunday':
            console.log('Domingo');
            break;
        default:
            console.log("NO DAY CORRESPONDING");

    }
        
    }
main();