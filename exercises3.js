/*
    ! Exercises Level 3 

    * 1. Write a program which tells the number of days in a month.

*/
    let enterMonth=prompt('Enter the Month Value');

    switch(enterMonth){
        case 'january':
            console.log('January has a 31 Days');
            break;
        case 'february':
            console.log('February has a 28 Days');
            break;
        case 'march':
            console.log('March has a 31 Days');
            break;
        case 'april':
            console.log('April has a 30 Days');
            break;
        case 'may':
            console.log('May has a 31 Days');
            break;
        case 'june':
            console.log('June has a 30 Days');
            break;
        case 'july':
            console.log('July has a 31 Days');
            break;
        case 'august':
            console.log('August has a 31 Days');
            break;
        case 'september':
            console.log('September has a 30 Days');
            break;
        case 'october':
            console.log('October has a 31 Days');
            break;
        case 'november':
            console.log('November has a 30 Days');
            break;
        case 'december':
            console.log('December has a 31 Days');
            break;
            
            default:
                console.log('404 Not Found');
    }