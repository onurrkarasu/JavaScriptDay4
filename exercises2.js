/*
    ! exercises level 2 : 
*/

/*
  1.   Write a code which can give grades to students according to theirs scores:
        80-100, A
        70-89, B
        60-69, C
        50-59, D
        0-49, F
*/

    let studentPoint=80;

    switch(studentPoint){
        case 100:
            console.log('YOUR NOTE : A ');
            break
        case 90:
            console.log('YOUR NOTE : A ');
            break
        case 80:
            console.log('YOUR NOTE : B ');
            break
        case 70:
            console.log('YOUR NOTE : B ');
            break
        case 60:
            console.log('YOUR NOTE : C ');
             break
        case 50:
            console.log('YOUR NOTE : D ');
            break
        case 40:
            console.log('YOUR NOTE : F ');
            break
        case 0:
            console.log('YOUR NOTE : F ');
            break
             default:
            console.log('Note is not found');
    }

/*
    2. Check is if the season is Autumn, Winter, Spring or Summer. If the user input is : 
            September, October or November, the season is Autumn.
            December, January or February, the season is Winter.
            March, April or May, the season is Spring
            June, July or August, the season is Summer

*/

    let inputs=prompt('Enter the Season Name  :  ');
    switch(inputs){
        case 'september':
            console.log('the season is Autumn');
            break
        case 'october':
            console.log('the season is Autumn ');
            break
        case 'november':
            console.log('the season is Autumn ');
            break
        case 'december':
            console.log('the season is Winter.');
            break
        case 'january':
            console.log('the season is Winter.');
             break
        case 'february':
            console.log('the season is Winter. ');
            break
        case 'march':
            console.log('the season is Spring.');
            break
        case 'april':
            console.log('the season is Spring. ');
        case 'may':
            console.log('the season is Spring.');
            break
        case 'june':
            console.log('the season is Summer.');
            break
        case 'july':
            console.log('the season is Summer. ');
            break
        case 'august':
            console.log('the season is Summer.');
            break
        
             default:
            console.log('Not FOund');
    }

/*
   3.  Check if a day is weekend day or a working day. Your script will take day as an input.
*/
    let dayControl=prompt('Enter the Day Name .');
    switch(dayControl){
        case 'sunday':
            console.log('Sunday is a weekend day .')
            break;
        case 'monday':
            console.log('Monday is the working day.');
            break;
        case 'tuesday':
            console.log('Tuesday is the working day.');
            break;
        case 'wednesday':
            console.log('Wednesday is the working day.');
            break;
        case 'thursday':
            console.log('Thursday is working Day');
            break;
        case 'friday':
            console.log('Friday is the working Day');
            break;
        case 'saturday':
            console.log('Saturday is a weekend day');
            break;
            default:
                console.log('404');
    }