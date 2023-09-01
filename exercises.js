/*
    ! Exercises Level 1 : 
*/

/*
    * 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , 
    * give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
*/
    let age=parseInt(prompt('Enter your BirthYear'));
    let nowYear=new Date().getFullYear();
    let calculateAge=nowYear-age;
    
    if(calculateAge>18){
        console.log("You are old enough to drive.");
    }else{
        let leftYears=18-calculateAge;
        console.log(`You are left with ${leftYears} years to drive.`);
    }

    
/*
    * 2. Compare the values of myAge and yourAge using if … else. 
    * Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
*/
    let myAge=parseInt(prompt('Enter my age : '));
    let yourAge=parseInt(prompt('Enter your age : '));
    let calc=myAge-yourAge;
    let calc2=Math.abs(calc);
    
    if(myAge>yourAge){
        console.log(`My ${calc} years older than you `);
    }else if(myAge<yourAge){
        console.log(`You are ${calc2} years older than me.`);
    }else{
        console.log('Not number');
    }

/*
    * 3.  If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
    *   using if else
    *   ternary operator
*/  
    let a=4;
    let b=3;
    a>b
     ? console.log(`${a} is greater than ${b}`)
     : console.log(`${a} is less than ${b}`);

/*
    * 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

*/
    let number=parseInt(prompt('Enter the number'));
    if(number%2==0){
        console.log(`${number} is even`);
    }else{
        console.log(`${number} is odd`);
    }
