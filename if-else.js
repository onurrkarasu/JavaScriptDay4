/*
    ! if - else
    if condition is true the first block will be executed,if not the else condition will be executed.
*/
/*
    ! Syntax
    if(condition){
        this part of code runs for truthy condition
    }else{
        this part of code runs for false condition
    }
*/

let num=3;
if(num>0){
    console.log(`${num} is a positive number`);
}else{
    console.log(`${num} is a negative number`);
} // 3 is a positive number

num=-3;
if(num>0){
    console.log(`${num} is a positive number`);
}else{
    console.log(`${num} is a negative number`);
}

let weatherRaining=true;
if(weatherRaining){
    console.log('You need a rain coat');
}else{
    console.log('No need for a rain coat.');
} // You need a rain coat

weatherRaining=false;
if(weatherRaining){
    console.log('You need a rain coat');
}else{
    console.log('No need for a rain coat.');
} // No need for a rain coat.

// The last condition is false, therefore the else block was executed. What if we have more than two conditions? In that case, we would use else if conditions.
