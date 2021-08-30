//get values from the page (start or controller function)
function getValues() {
    //get values from page
    let startValue = parseInt(document.getElementById("startValue").value);
    let endValue = parseInt(document.getElementById("endValue").value);
    let numbers;
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers()
        numbers = generateNumbers(startValue, endValue);
        
    }
    else {
        // warns if input other than an integer was entered
        alert("You must enter integer values");
    }


    //call displayNumbers()
    displayNumbers(numbers);
}

//generate values from the start value to the end value (logic function)
function generateNumbers(startValue, endValue) {
    let numbers = [];
    for (i = startValue; i <= endValue; i++) {
        numbers.push(i);
    }
    return numbers;
}

//display the numbers and mark the even numbers bold (view functions)
function displayNumbers(numbers) {
    let templateRows = "";
    let number;
    for (let i = 0; i < numbers.length; i++) {
        number = numbers[i];
        
        if (number % 2 == 0) {
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`;
        } else {
            templateRows += `<tr><td>${number}</td></tr>`;
        }
        
    }
    document.getElementById("results").innerHTML = templateRows;
}