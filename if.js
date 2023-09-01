/*
    !if

    In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code. To
    create an if condition, we need if keyword, condition inside a parenthesis and block of code inside curly bracket {{}}
*/
    /*
        * Syntax
        if(condition){
              this part of code runs for truthy condition
        }
    */

    let num=3;
    if(num>3){
        console.log(`${num} is positive number`);
    }
    // 3 is a positive number

    /*
        As you can see in the condition example above, 3 is greater than 0, so it is a positive number. The condition was true and the block of code
        was executed. However, if condition is false, we won't see any resultys.
    */

            let isRaining=true;
            if(isRaining){
                console.log('Remember to take your rain coat.');
            }
    /*
            The same goes for the second condition, if isRaining is false the if block will not be executed and we do not see any output. In order too
            see the result of a falsy condition, we should have another block, which is going to be else.
    */