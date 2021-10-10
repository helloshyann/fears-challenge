//Button Event
 function addForX() {
    let result = "";
    let inputX = document.getElementById('inputX').value;
    let val1 = Number(document.getElementById("input3").value);
    let val2 = Number(document.getElementById("input7").value);
    let val3 = Number(document.getElementById("input10").value);
    let val4 = Number(document.getElementById("input15").value);

    if (inputX == "" || val1 == "" || val2 == "" || val3 == "" || val4 == "") {
        document.getElementById("resultPlacement").innerHTML = 
        `<h1>Uh oh!</h1><br>You must input a number for all array options and the X variable.`;
    }
    else {
        result = sumOfAllFears(inputX);
        document.getElementById('resultPlacement').innerHTML = `${result}`;
    }
};


function sumOfAllFears() {

    //Step 1: Get User Input & Establish Variables
    let valX = document.getElementById("inputX").value;

    let val1 = Number(document.getElementById("input3").value);
    let val2 = Number(document.getElementById("input7").value);
    let val3 = Number(document.getElementById("input10").value);
    let val4 = Number(document.getElementById("input15").value);

    let result = [];

    //Step 2: Do Something With Input
    for (let i = 1; i <= 1; i++) {

        if (valX == val1 + val2) {
            result.push((val1) + " and " + (val2) + " from your array add up to equal your X variable, " + (valX));
        }
        else if (valX == val1 + val3) {
            result.push((val1) + " and " + (val3) + " from your array add up to equal your X variable, " + (valX));
        }
        else if (valX == val1 + val4) {
            result.push((val1) + " and " + (val4) + " from your array add up to equal your X variable, " + (valX));
        }
        else if (valX == val2 + val3) {            
            result.push((val2) + " and " + (val3) + " from your array add up to equal your X variable, " + (valX));
        }
        else if (valX == val2 + val4) {            
            result.push((val2) + " and " + (val4) + " from your array add up to equal your X variable, " + (valX));
        }
        else if (valX == val3 + val4) {            
            result.push((val3) + " and " + (val4) + " from your array add up to equal your K variable, " + (valX));
        }
        //If valX does not successfully compare
        else {
            result.push("Sorry, no two numbers of your array can add together to equal your X variable, " + (valX));
        }
    }
    //Step 3: Display Result to User
    return result;
}