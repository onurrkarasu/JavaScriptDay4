/*
    !IF Else IF Else

    On our daily life, we make decisions on daily basis. We make decisions not by checking one or two conditions instead we make decisions 
    based on multiple conditions. As similar to our daily life, programming is also full of conditions. we use else if when we have multiple
    conditions.


    if(condition){
        * code
    }else if(conditon){
        * code
    }else {
        * code
    }

*/  

    let a=0;
    if(a>0){
        console.log(`${a} is positive number`);
    }else if(a<0){
        console.log(`${a} is negative number`);
    }else if(a==0){
        console.log(`${a} is zero`);
    }else{
        console.log(`${a} is not a number`);
    }

    let weather='sunny';
    if(weather=='rainy'){
        console.log('You need a rain coat.')
    }else if(weather=='cloudy'){
        console.log('It might be cold, you need a jacket.')
    }else if(weather=='sunny'){
        console.log('Go out freely.')
    }else{
        console.log('No need for rain coat.')
    }