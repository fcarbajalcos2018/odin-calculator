const userInput = ['12', '-', '2', '*', '2'];
console.log(userInput);

function calculate(userInput){
    let increment = 0;
    for (let i = 0; i < userInput.length; i++){
        const currentUI = parseInt(userInput[i]);
        if (i == 0){
            increment = currentUI;
            continue;
        }
        if (i % 2 != 0){
            continue;
        }
        switch (userInput[i - 1]){
            case '+':
                increment += currentUI;
                break;
            case '-':
                increment -= currentUI;
                break;
            case '*':
                increment *= currentUI;
                break;
            case '/':
                increment /= currentUI;
                break;
            default:
                break;
        }
    }
    return increment;
}
console.log(calculate(userInput));